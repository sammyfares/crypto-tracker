import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coinSchema = new mongoose.Schema({
    apiId: String,
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
