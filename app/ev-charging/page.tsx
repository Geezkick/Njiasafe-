'use client'

import { motion } from 'framer-motion'
import PremiumLayout from '@/components/layout/PremiumLayout'
import SafeButton from '@/components/ui/SafeButton'
import { 
  BatteryCharging, MapPin, Zap, Car, Clock, DollarSign,
  Wifi, Shield, Star, Navigation, Filter, Download,
  Battery, Plug, Power, ChargingPile, Electricity,
  TrendingUp, AlertCircle, CheckCircle, XCircle
} from 'lucide-react'
import { useState } from 'react'

export default function EvChargingPage() {
  const [selectedStation, setSelectedStation] = useState(0)
  const [filter, setFilter] = useState('all')

  const chargingStations = [
    {
      id: 1,
      name: 'PowerUp Fast Charge',
      location: 'Nairobi CBD, Kenyatta Ave',
      distance: '1.2 km',
      available: 8,
      total: 12,
      price: 'KES 45/kWh',
      speed: 'Fast (150kW)',
      rating: 4.8,
      amenities: ['Cafe', 'WiFi', 'Restrooms', 'Shopping'],
      status: 'available'
    },
    {
      id: 2,
      name: 'ChargeAfrika Ultra',
      location: 'Westlands, Mpaka Road',
      distance: '3.5 km',
      available: 4,
      total: 6,
      price: 'KES 55/kWh',
      speed: 'Ultra (350kW)',
      rating: 4.9,
      amenities: ['Lounge', 'WiFi', 'Restrooms', 'Food Court'],
      status: 'available'
    },
    {
      id: 3,
      name: 'EcoCharge Standard',
      location: 'Karen, Langata Road',
      distance: '8.2 km',
      available: 0,
      total: 4,
      price: 'KES 35/kWh',
      speed: 'Standard (50kW)',
      rating: 4.5,
      amenities: ['Park', 'WiFi', 'Restrooms'],
      status: 'busy'
    },
    {
      id: 4,
      name: 'VoltNet Supercharge',
      location: 'Thika Road, Garden City',
      distance: '5.7 km',
      available: 6,
      total: 10,
      price: 'KES 50/kWh',
      speed: 'Fast (150kW)',
      rating: 4.7,
      amenities: ['Mall', 'WiFi', 'Restrooms', 'Cinema'],
      status: 'available'
    }
  ]

  const chargingNetworks = [
    { name: 'PowerUp', stations: 1240, color: 'from-blue-600 to-cyan-500' },
    { name: 'ChargeAfrika', stations: 890, color: 'from-green-600 to-emerald-500' },
    { name: 'EcoCharge', stations: 1560, color: 'from-purple-600 to-pink-500' },
    { name: 'VoltNet', stations: 760, color: 'from-orange-600 to-red-500' },
  ]

  const filters = [
    { id: 'all', label: 'All Stations', icon: MapPin },
    { id: 'fast', label: 'Fast Charging', icon: Zap },
    { id: 'available', label: 'Available Now', icon: BatteryCharging },
    { id: 'cheap', label: 'Best Price', icon: DollarSign },
  ]

  const stats = [
    { icon: BatteryCharging, label: 'Total Stations', value: '4,450+', color: 'text-blue-400' },
    { icon: Zap, label: 'Fast Chargers', value: '2,100+', color: 'text-green-400' },
    { icon: Clock, label: 'Avg Wait Time', value: '12 min', color: 'text-yellow-400' },
    { icon: DollarSign, label: 'Avg Price', value: 'KES 48/kWh', color: 'text-purple-400' },
  ]

  const handleReserveStation = (stationId: number) => {
    alert(`Reserving station #${stationId}... Reservation system would open here.`)
  }

  const handleNavigateToStation = (station: any) => {
    alert(`Navigating to ${station.name}... Navigation would open here.`)
  }

  return (
    <PremiumLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-lg overflow-hidden p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600">
                <BatteryCharging className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  EV <span className="text-gradient-premium">Charging Map</span>
                </h1>
                <p className="text-gray-300">
                  Find, reserve, and navigate to electric vehicle charging stations across Africa
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Live Availability</div>
                <div className="text-lg font-bold text-green-400">87% Stations Free</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-primary-gold/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Charging Stations List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Filters */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Charging Stations</h2>
                <div className="text-sm text-gray-400">Near Nairobi, Kenya</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {filters.map((filterItem) => {
                  const Icon = filterItem.icon
                  const isActive = filter === filterItem.id
                  return (
                    <button
                      key={filterItem.id}
                      onClick={() => setFilter(filterItem.id)}
                      className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'bg-gray-800/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-2" />
                      <span className="text-xs font-medium">{filterItem.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Stations List */}
              <div className="space-y-4">
                {chargingStations.map((station, index) => (
                  <motion.div
                    key={station.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
                      selectedStation === index
                        ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/50'
                        : 'bg-gray-800/30 border-gray-700/50 hover:border-green-500/30'
                    }`}
                    onClick={() => setSelectedStation(index)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{station.name}</h3>
                          {station.status === 'available' ? (
                            <div className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                              <CheckCircle className="w-3 h-3" />
                              <span>{station.available} Available</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-red-500/20 text-red-400">
                              <XCircle className="w-3 h-3" />
                              <span>Full</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{station.location}</span>
                          <span className="text-green-400">• {station.distance} away</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white mb-1">{station.price}</div>
                        <div className="text-sm text-gray-400">{station.speed}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-white">{station.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {station.amenities.slice(0, 2).map((amenity, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded bg-gray-700/50">
                              {amenity}
                            </span>
                          ))}
                          {station.amenities.length > 2 && (
                            <span className="text-xs text-gray-500">
                              +{station.amenities.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReserveStation(station.id)
                          }}
                          className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm"
                        >
                          Reserve
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNavigateToStation(station)
                          }}
                          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
                        >
                          Navigate
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Charging Networks */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Charging Networks</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chargingNetworks.map((network, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl bg-gradient-to-br ${network.color}/20 border ${network.color.replace('from-', 'border-').split(' ')[0]}/30`}
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {network.stations.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">{network.name} Stations</div>
                    <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        style={{ width: `${(network.stations / 4450) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Selected Station Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Selected Station Details */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Station Details</h3>
              {(() => {
                const station = chargingStations[selectedStation]
                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">{station.name}</div>
                        <div className="text-sm text-gray-400">{station.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{station.price}</div>
                        <div className="text-sm text-gray-400">{station.speed}</div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Availability</span>
                        <span>{station.available}/{station.total} ports free</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: `${(station.available / station.total) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Amenities</div>
                      <div className="flex flex-wrap gap-2">
                        {station.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-gray-800/50 text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <SafeButton
                        onClick={() => handleReserveStation(station.id)}
                        variant="premium"
                        className="w-full"
                      >
                        <Clock className="w-4 h-4" />
                        Reserve Now
                      </SafeButton>
                      <SafeButton
                        onClick={() => handleNavigateToStation(station)}
                        variant="secondary"
                        className="w-full"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate
                      </SafeButton>
                    </div>
                  </div>
                )
              })()}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Charging Tips</h3>
              <div className="space-y-3">
                {[
                  "Fast charge to 80% for best battery health",
                  "Reserve ahead during peak hours (4-8 PM)",
                  "Use app for remote charging start/stop",
                  "Off-peak hours (10 PM - 6 AM) are 30% cheaper",
                  "Keep charging cable clean for optimal speed"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Charge Time */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Estimated Charge Time</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { level: '20% → 80%', time: '25 min', type: 'Fast' },
                    { level: '0% → 100%', time: '1h 10min', type: 'Full' },
                    { level: '50% → 90%', time: '18 min', type: 'Top-up' },
                  ].map((estimate, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-gray-800/30">
                      <div className="text-lg font-bold text-white">{estimate.time}</div>
                      <div className="text-xs text-gray-400">{estimate.level}</div>
                      <div className="text-xs text-green-400">{estimate.type}</div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Based on {chargingStations[selectedStation].speed} charging speed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PremiumLayout>
  )
}
