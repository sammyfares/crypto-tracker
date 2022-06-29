import mongoose from 'mongoose'

const watchlistSchema = new mongoose.Schema({
    id: String,
    name: String,
    // review: [reviewSchema],
    coin: String,

    
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  watchlist: [watchlistSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
}
