import { motion } from "framer-motion";


function TeamCard({ name, role, image, delay = 0 }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay }}
        viewport={{ once: true }}
        className="card w-96 bg-base-100 shadow-md text-center"
      >
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-full h-28 w-28 object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{name}</h2>
          <p className="text-gray-400">{role}</p>
        </div>
      </motion.div>
    );
  }
  
export default TeamCard;
  