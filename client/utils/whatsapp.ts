export const openWhatsApp = (message?: string) => {
  const phoneNumber = "918754712377"; // Without + sign for WhatsApp
  const defaultMessage =
    "Hi! I'm interested in GURUAESTHETICS services. Can you help me?";
  const text = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(whatsappUrl, "_blank");
};
