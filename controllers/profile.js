
import { Profile } from "../models/profile.js"

function index(req, res){
    Profile.find({})
    .then(profiles => {
        res.render('profile/index', {
            profiles
            
        })
    })
}



export {
    index,
}