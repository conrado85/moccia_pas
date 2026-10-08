import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

const formSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres"),
  marca: z.string().trim().min(2, "Escribí el nombre de la marca"),
  modelo: z.string().trim().min(2, "Escribí el modelo del vehículo"),
  ano: z.string().min(1, "Escribí el año del vehículo"),
  localidad: z.string().trim().min(2, "Escribí la localidad"),
  gnc: z.boolean().optional(),
  mensaje: z.string().optional(),
  privacidad: z.boolean().refine((accepted) => accepted, "Tenés que aceptar la política de privacidad"),
});

const inputClassName =
  "w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-lowest placeholder:text-outline transition-all";
const labelClassName =
  "block font-label-md text-label-md text-on-surface mb-1.5";
const iconClassName =
  "material-symbols-outlined absolute left-3.5 top-3 text-outline text-[20px]";

const errorClassName = "mt-1 text-sm text-red-700";

function Field({ id, label, icon, error, children }) {
  return (
    <div>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <span className={iconClassName} aria-hidden="true">
          {icon}
        </span>
        {children}
      </div>
      {error && (
        <p className={errorClassName} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      marca: "",
      modelo: "",
      ano: "",
      localidad: "",
      gnc: false,
      mensaje: "",
      privacidad: false,
    },
  });

  function onSubmit(data) {
    const textoMensaje = [
      "Hola *Moccia PAS*, quisiera solicitar una cotización para mi seguro desde la web:",
      "",
      `*Nombre:* ${data.nombre}`,
      `*Marca:* ${data.marca}`,
      `*Modelo del vehículo:* ${data.modelo}`,
      `*Año del vehículo:* ${data.ano}`,
      `*Localidad:* ${data.localidad}`,
      `*GNC:* ${data.gnc ? "Sí" : "No"}`,
      `*Detalles adicionales:* ${data.mensaje?.trim() || "Sin detalles"}`,
    ].join("\n");

    const urlWhatsApp = `https://wa.me/5491133539040?text=${encodeURIComponent(textoMensaje)}`;
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className={className}
      id="insuranceForm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="nombre"
          label="Nombre y apellidos *"
          icon="person"
          error={errors.nombre}
        >
          <input
            className={inputClassName}
            id="nombre"
            placeholder="Ej. Ana García López"
            autoComplete="name"
            aria-invalid={Boolean(errors.nombre)}
            {...register("nombre")}
            type="text"
          />
        </Field>
        <Field
          id="marca"
          label="Marca del vehículo *"
          icon="directions_car"
          error={errors.marca}
        >
          <input
            className={inputClassName}
            id="marca"
            placeholder="Ej. Volkswagen"
            aria-invalid={Boolean(errors.marca)}
            {...register("marca")}
            type="text"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="modelo"
          label="Modelo del vehículo *"
          icon="directions_car"
          error={errors.modelo}
        >
          <input
            className={inputClassName}
            id="modelo"
            placeholder="Ej. Polo"
            aria-invalid={Boolean(errors.modelo)}
            {...register("modelo")}
            type="text"
          />
        </Field>
        <Field
          id="ano"
          label="Año del vehículo *"
          icon="calendar_month"
          error={errors.ano}
        >
          <input
            className={inputClassName}
            id="ano"
            inputMode="numeric"
            placeholder="Ej. 2022"
            aria-invalid={Boolean(errors.ano)}
            {...register("ano")}
            type="text"
          />
        </Field>
      </div>

      <Field
        id="localidad"
        label="Localidad *"
        icon="location_on"
        error={errors.localidad}
      >
        <input
          className={inputClassName}
          id="localidad"
          autoComplete="address-level2"
          placeholder="Ej. Morón, Buenos Aires"
          aria-invalid={Boolean(errors.localidad)}
          {...register("localidad")}
          type="text"
        />
      </Field>

      <div className="flex items-center gap-3">
        <input
          className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
          id="gnc"
          type="checkbox"
          {...register("gnc")}
        />
        <label
          className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
          htmlFor="gnc"
        >
          El vehículo tiene equipo de GNC
        </label>
      </div>

      <div>
        <label className={labelClassName} htmlFor="mensaje">
          Detalles adicionales (opcional)
        </label>
        <textarea
          className="w-full px-4 py-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container-lowest placeholder:text-outline transition-all resize-none"
          id="mensaje"
          placeholder="Agregá cualquier dato que quieras incluir en la consulta."
          rows="3"
          {...register("mensaje")}
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
          id="privacy"
          type="checkbox"
          aria-invalid={Boolean(errors.privacidad)}
          {...register("privacidad")}
        />
        <label
          className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
          htmlFor="privacy"
        >
          He leído y acepto la{" "}
          <a className="text-primary underline" href="#">
            Política de Privacidad
          </a>{" "}
          y consiento el tratamiento de mis datos para remitirme el cálculo de
          prima solicitado.
        </label>
      </div>
      {errors.privacidad && (
        <p className={errorClassName} role="alert">
          {errors.privacidad.message}
        </p>
      )}

      <button
        className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        type="submit"
      >
        <FaWhatsapp aria-hidden="true" />
        <span>Solicitar cotización por WhatsApp</span>
        <FaPaperPlane aria-hidden="true" />
      </button>
    </form>
  );
}