import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coinSchema = new mongoose.Schema({
    id: String,
    name: String,
    symbol: String,
    image: String,
    marketcap: Number,
    owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Coin = mongoose.model('Coin', coinSchema)

export {
  Coin
}
