const { response } = require('express')
const Information = require('../models/Information')

exports.addInfo = async (req, resp) => {
    try {

        const { name, email, message } = req.body

        const information = new Information({
            name: name,
            email: email,
            message: message
        })

        const saveInfo = await information.save()

        return resp.status(200).json({ saveInfo: saveInfo, status: 'successful' })




    } catch (error) {
        console.error(error.message);
        //  res.status(500).send("internal server error");
        return resp.status(500).json({ error: "internal server error" });
    }


}

exports.getData = async (req, resp) => {
    try {
        const allData = await Information.find({})
        if (allData) {
            return resp.status(200).json({ allData: allData })
        }


    } catch (error) {
        console.error(error.message);
        //  res.status(500).send("internal server error");
        return resp.status(500).json({ error: "internal server error" });
    }
}

exports.getUserById = async (req, resp) => {
    try {
        const { id } = req.params
        const userIndividual = await Information.findById({ _id: id })
        return resp.status(200).json({ individualUser: userIndividual })




    } catch (error) {
        console.error(error.message);
        //  res.status(500).send("internal server error");
        return resp.status(500).json({ error: "internal server error" });
    }
}

exports.updateUser = async(req, resp) => {
    try{
        const { id } = req.params
        const updatedUser=await Information.findByIdAndUpdate(id,req.body,{
              new:true
        })
        return resp.status(200).json({updatedUser:updatedUser})


    }catch(error) {
        console.error(error.message);
        //  res.status(500).send("internal server error");
        return resp.status(500).json({ error: "internal server error" });
    }
}

exports.deleteUserData=async(req,resp)=>{
   
    try{
    const {id}=req.params
    const deleteUser=await Information.findByIdAndDelete({_id:id})
    return resp.status(200).json(deleteUser)

   }catch(error) {
    console.error(error.message);
    //  res.status(500).send("internal server error");
    return resp.status(500).json({ error: "internal server error" });
}

}