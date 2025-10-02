const {StatusCodes} = require('http-status-codes')

const servercheck = (req,res)=>{
    res.status(StatusCodes.OK).json({
        msg: "Server is running",
        success: true,
        error: {},
        info: {}
    });
}

module.exports = servercheck