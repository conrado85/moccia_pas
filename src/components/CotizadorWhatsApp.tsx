import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

// 1. Esquema de validación
const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  marca: z.string().min(2, "Escribí el nombre de la marca"),
  modelo: z.string().min(2, "Escribí el modelo del vehículo"),
  ano: z.string().min(1, "Escribí el año del vehículo"),
  localidad: z.string().min(2, "Escribí la localidad"),
  gnc: z.boolean().optional(),
  mensaje: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const CotizadorWhatsApp = () => {
  // Número de la agencia (formato internacional sin el +)
  const TELEFONO_WHATSAPP = "5491158358414";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // 2. Formatear mensaje para WhatsApp (%0A = salto de línea)
    const textoMensaje = 
      `Hola *Moccia PAS*, quisiera solicitar una cotización para mi seguro desde la web:%0A%0A` +
      ` *Nombre:* ${data.nombre}%0A` +
      ` *Modelo del vehículo:* ${data.modelo}%0A` +
      ` *Año del vehículo:* ${data.ano}%0A` +
      ` *Localidad:* ${data.localidad}%0A` +
      ` *GNC:* ${data.gnc ? "Sí" : "No"}%0A` +
      ` *Detalles adicionales:* ${data.mensaje || "Sin detalles"}`;

    const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${textoMensaje}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="card bg-transparent w-full max-w-md shrink-0 shadow-xl text-brand-blue p-6 space-y-4"
    >
      <div className="flex items-center gap-2">
        <FaWhatsapp className="text-3xl text-success" />
        <h3 className="card-title text-xl text-base-content">
          Solicitar Cotización
        </h3>
      </div>

      {/* Campo Nombre */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium ">Nombre completo</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Juan Pérez"
          {...register("nombre")}
          className={`input input-bordered w-full ${errors.nombre ? "input-error" : ""}`}
        />
        {errors.nombre && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.nombre.message}</span>
          </label>
        )}
      </div>

      {/* Campo Cobertura */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Marca del vehículo</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Toyota, Ford, Honda..."
          {...register("marca")}
          className={`input input-bordered w-full ${errors.marca ? "input-error" : ""}`}
        />
        {errors.marca && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.marca.message}</span>
          </label>
        )}
      </div>

      {/* Campo Modelo */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Modelo del vehículo</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Corolla, F-150, Civic..."
          {...register("modelo")}
          className={`input input-bordered w-full ${errors.modelo ? "input-error" : ""}`}
        />
        {errors.modelo && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.modelo.message}</span>
          </label>
        )}
      </div>

      {/* Campo Año */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Año del vehículo</span>
        </label>
        <input
          type="text"
          placeholder="Ej. 2020, 2021, 2022..."
          {...register("ano")}
          className={`input input-bordered w-full ${errors.ano ? "input-error" : ""}`}
        />
        {errors.ano && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.ano.message}</span>
          </label>
        )}
      </div>

      {/* Campo Localidad */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Localidad</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Buenos Aires, Córdoba, Rosario..."
          {...register("localidad")}
          className={`input input-bordered w-full ${errors.localidad ? "input-error" : ""}`}
        />
        {errors.localidad && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.localidad.message}</span>
          </label>
        )}
      </div>

      {/* Campo GNC */}
      <div className="form-control w-full">
       
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("gnc")}
            className={`checkbox checkbox-success ${errors.gnc ? "checkbox-error" : ""}`}
          />
          <span>¿El vehículo utiliza GNC?</span>
        </div>
      </div>

      {/* Campo Mensaje */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Detalles (Opcional)</span>
        </label>
        <textarea
          placeholder="Modelo del auto, metros cuadrados, etc."
          {...register("mensaje")}
          className="textarea textarea-bordered h-24 w-full"
        />
      </div>

      {/* Botón enviar */}
      <button type="submit" className="btn btn-success text-white w-full gap-2 mt-2">
        <FaPaperPlane />
        Enviar Cotización a WhatsApp
      </button>
    </form>
  );
};