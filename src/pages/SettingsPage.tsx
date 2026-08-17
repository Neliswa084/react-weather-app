import React, { useState } from 'react'
import { Card } from '../Components/Card/Card'
import { Text } from '../Components/Text/Text'
import { TempToggle } from '../Components/TempToggle/TempToggle'
import { DarkMode } from '../Components/DarkModeToggle/DarkMode'
import styles from './SettingsPage.module.css'

type SettingsPageProps = {
  units: string
  changeUnits: (newUnits: string) => void
  isDark: boolean
  handleChange: () => void
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ units, changeUnits, isDark, handleChange }) => {

  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied'
  )

  const [savedCities, setSavedCities] = useState<string[]>(
    () => JSON.parse(localStorage.getItem('savedCities') || '[]')
  )

  // Request browser notification permission for weather alerts
  const requestNotificationPermission = async () => {
    if (typeof Notification === 'undefined') return
    const permission = await Notification.requestPermission()
    setNotificationPermission(permission)
  }

  // Remove one saved city
  const handleDeleteCity = (cityToDelete: string) => {
    const updated = savedCities.filter(city => city !== cityToDelete)
    setSavedCities(updated)
    localStorage.setItem('savedCities', JSON.stringify(updated))
  }

  // Remove all saved cities
  const handleClearAll = () => {
    setSavedCities([])
    localStorage.removeItem('savedCities')
  }

  const getAlertStatus = () => {
    if (notificationPermission === 'granted') return '✅ Weather alerts are enabled'
    if (notificationPermission === 'denied') return '❌ Blocked — allow notifications in your browser settings'
    return '🔔 Not yet enabled'
  }

  return (
    <div className={styles['settings-container']}>
      <Text variant='h1'>Settings</Text>

      {/* Appearance */}
      <Card>
        <Text variant='h2'>🎨 Appearance</Text>
        <div className={styles['setting-row']}>
          <Text variant='p'>Dark mode</Text>
          <DarkMode isChecked={isDark} handleChange={handleChange} />
        </div>
      </Card>

      {/* Temperature Units */}
      <Card>
        <Text variant='h2'>🌡️ Temperature Units</Text>
        <div className={styles['setting-row']}>
          <Text variant='p'>Choose your preferred unit</Text>
          <TempToggle units={units} changeUnits={changeUnits} />
        </div>
      </Card>

      {/* Weather Alerts */}
      <Card>
        <Text variant='h2'>⚠️ Weather Alerts</Text>
        <Text variant='p'>{getAlertStatus()}</Text>

        {notificationPermission === 'default' && (
          <button onClick={requestNotificationPermission} className={styles['enable-btn']}>
            Enable Weather Alerts
          </button>
        )}

        {notificationPermission === 'granted' && (
          <Text variant='p'>
            You will receive a browser notification if severe weather is detected in your location.
          </Text>
        )}

        {notificationPermission === 'denied' && (
          <Text variant='p'>
            To enable alerts: open your browser settings → Site settings → Notifications → allow this site.
          </Text>
        )}
      </Card>

      {/* Saved Locations */}
      <Card>
        <div className={styles['saved-header']}>
          <Text variant='h2'>📌 Saved Locations</Text>
          {savedCities.length > 0 && (
            <button onClick={handleClearAll} className={styles['clear-btn']}>
              Clear all
            </button>
          )}
        </div>

        {savedCities.length === 0 ? (
          <Text variant='p'>No saved locations yet. Search for a city to save it automatically.</Text>
        ) : (
          <ul className={styles['saved-list']}>
            {savedCities.map(city => (
              <li key={city} className={styles['saved-item']}>
                <Text variant='span'>{city}</Text>
                <button onClick={() => handleDeleteCity(city)} className={styles['delete-btn']}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
