const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "593987654321";

export const appLink = process.env.NEXT_PUBLIC_APP_URL || "#";

export const whatsappDemoLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero solicitar una demo de Teikio")}`;

export const whatsappLink = `https://wa.me/${whatsappNumber}`;
