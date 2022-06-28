import mongoose from 'mongoose'

const coinsSchema = new mongoose.Schema({
    id: String,
    name: String,
    symbol: String,
    image: String,
    marketcap: Number,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
}
