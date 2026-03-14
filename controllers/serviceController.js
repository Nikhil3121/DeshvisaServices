import Service from "../models/servicesModel.js";
import SubService from "../models/subServiceModel.js";


export const createService = async (req, res) => {
  try {

    const service = await Service.create(req.body);

    res.status(201).json(service);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServices = async (req, res) => {

  const services = await Service.find();

  res.json(services);
};

export const updateService = async (req, res) => {

  const service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(service);
};

export const deleteService = async (req, res) => {

  await Service.findByIdAndDelete(req.params.id);

  res.json({ message: "Service deleted" });
};
export const getFullServices = async (req,res)=>{

  try{

    const services = await Service.find();

    const data = await Promise.all(
      services.map(async(service)=>{

        const subServices = await SubService.find({
          serviceTitle: service.title
        });

        return {
          ...service._doc,
          subServices
        }

      })
    )

    res.json(data)

  }catch(error){

    console.error(error)

    res.status(500).json({
      message:error.message
    })

  }

}