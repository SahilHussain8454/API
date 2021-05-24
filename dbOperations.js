var config = require('./dbconfig');
const sql = require('mssql');



async function getContainerDetails(ContainerNo) {

    try {

        let pool = await sql.connect(config);

        let ContainerDetails = await pool.request()
            .input('input_parameter', sql.VarChar, ContainerNo)
            .query("select PickupDate,FPD,Bookingno,VesselVoysName from dbo.ContainerDetails where Containerno = @input_parameter");
        return ContainerDetails.recordset;

    } catch (error) {
        console.log(error);
    }

}






// async function getContainerDetails() {
//     try {
//         console.log("trying try block");
//         let pool = await sql.connect(config);
//         console.log("trying try 2 block");
//         let ContainerDetails = await pool.request().query("select PickupDate,FPD,Bookingno,VesselVoysName from dbo.ContainerDetails ");
//         // console.log(ContainerDetails)
//         return ContainerDetails.recordset;
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {
    getContainerDetails: getContainerDetails
}