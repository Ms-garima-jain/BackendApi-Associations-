import order from "../Model/order.model.js";
import user from "../Model/user.model.js"
 export const createOrder = async (request, response, next) => {
    const { userId } = request.params;

    if (!userId) {
        return response.status(400).json({ success: false, message: "userId not found in URL" });
    }

    const { status, total, orderDate, paymentMethod } = request.body;

    try {
           const existingUser = await user.findByPk(userId);
        if (!existingUser) {
            return response.status(404).json({ success: false, message: "User not found" });
        }
        const neworder = await order.create({
            status,
            total,
            orderDate,
            paymentMethod,
            userId,
        });

        return response.status(200).json({ success: true, message: "Order created", data: neworder });
    } catch (error) {
        console.error("Order creation error:", error); 
        return response.status(500).json({ success: false, message: error.message });
    }
};
// api  for find all order(user model)
export const getAllOrder= async (request, response , next)=>{
    try
    {
        const allorder = await order.findAll({
            include:user
        })
        return response.status(200).json ({status :true, message :"fetched all orders", data:allorder})


    }
    catch (err)
    {
        console.log (err)
        return response.status(500).json ({success:false, message :"internal server error"})
    }
}
// api for find order by order id 
 export const getOrderById= async (request, response , next)=>{
    let {id}= request.params
     try
     {
        const findid =  await order.findByPk(id)
          if (!findid) {
            return response.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        return response.status(200).json({success:true , message:"order fetched successfully", data:findid});


     }
     catch (err)
     {
         console.log (err)
         return response.status(500).json({success:false , message :"internal server error"})
     }
 }
//  api for update order
 export  const updateorder= async ( request, response, next)=>
 {
    try{
        let {id }= request.params;
        let {status}= request.body;
        const findid = await order.findByPk(id);
        if (!findid)
        {
            return response.status(404).json({success:false , message:" orderid not found"})
        }
        else
        {
            const uporder = await order.update({status:status}, {where:{id:id}})
            return response.status(200).json({success : true , message :" order updated", data:uporder})
        }
    }
    catch (err)
    {
         console.log (err);
         return response.status(500).json ( { success : false , message:"internal server error"})
    }
 }
 // api for  delete order
 export const deleteOrder = async (request, response, next) => {
    try {
        const { id } = request.params;
           const checkid = await order.findByPk(id)
           if (!checkid)
           {
            return response.status(404).json({success:true, message :"order id not found"})
           }
           else
           {
  const deleted = await order.destroy({
            where: { id: id }
        });

     
        return response.status(200).json({
            success: true,
            message: "Order deleted successfully"
        });
           }

      

    } catch (err) {
        console.log(err);
        return response.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

