import mongoose from 'mongoose'

// const watchlistSchema = new mongoose.Schema({
//     id: String,
//     name: String,
//     symbol: String,
//     image: String,
//     marketcap: Number,
//     watchlist:[watchlistSchema]
// }, {
//   timestamps: true
// })

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
