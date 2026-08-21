import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

// 1. Esquema de validación
const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  cobertura: z.string().min(1, "Escribí el seguro que te interesa"),
  mensaje: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const CotizadorWhatsApp = () => {
  // Número de la agencia (formato internacional sin el +)
  const TELEFONO_WHATSAPP = "5491133539040";

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
      `Hola *Moccia PAS*, quisiera solicitar una cotización:%0A%0A` +
      `👤 *Nombre:* ${data.nombre}%0A` +
      `🛡️ *Tipo de Cobertura:* ${data.cobertura}%0A` +
      `💬 *Detalles adicionales:* ${data.mensaje || "Sin detalles"}`;

    const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${textoMensaje}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl border border-base-200 p-6 space-y-4"
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
          <span className="label-text font-medium">Nombre completo</span>
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
          <span className="label-text font-medium">Seguro de interés</span>
        </label>
        <input
          type="text"
          placeholder="Ej. Auto, Hogar, ART, Comercio..."
          {...register("cobertura")}
          className={`input input-bordered w-full ${errors.cobertura ? "input-error" : ""}`}
        />
        {errors.cobertura && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.cobertura.message}</span>
          </label>
        )}
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