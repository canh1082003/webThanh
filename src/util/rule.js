export const getRule = () => ({
  firstName: {
    required: { value: true, message: "bắt buộc" },
  },
  lastName: {
    required: { value: true, message: "bắt buộc" },
  },
  verifyEmail: {
    required: { value: true, message: "bắt buộc" },
  },
  email: {
    required: { value: true, message: "bắt buộc" },

    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email khôn đúng định dạng",
    },
  },
  password: {
    required: { value: true, message: "bắt buộc" },

    pattern: {
      value: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
      message: "viết hoa và thêm kí tự đặt biệt",
    },
    maxLength: {
      value: 160,
      message: "đồ dài từ 6-160",
    },
    minLength: {
      value: 5,
      message: "đồ dài từ 6-160",
    },
  },
  confirmPassword: {
    required: { value: true, message: "bắt buộc" },
  },
});
