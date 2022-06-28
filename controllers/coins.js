import axios from 'axios'
import { response } from 'express'
import { Coin } from '../models/coin.js'


function index(req, res) {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => {
        console.log(response.data)
        res.render('coins/search', {
            title: 'Search Results',
            search: req.body.search ? req.body.search: null,
            data: response.data,
    })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/coins')
    })
}
function search(req, res) {
    console.log(req.body)
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(response => {
        console.log(response.data)
        res.render('coins/search', {
            title: 'Search Results',
            search: req.body.search ? req.body.search: null,
            data: response.data,
            
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/coins')
    })
}

function show(req, res){
    console.log('*******',req.params.id)
    axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}`)
    .then(response => {
        console.log(response.data)
        console.log(req.params.id)
        res.render('coins/show', {
            data: response.data,
            title: "Coin details"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}


export {
    index,
    search,
    show,
}
