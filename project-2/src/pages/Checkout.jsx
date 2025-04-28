import React from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-[#F7F9FA] px-20 py-7 gap-20">
      <div className="w-[50%]">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-2xl font-semibold">Billing Details</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="Fname" className="block">
                First name
              </label>
              <br />
              <input
                type="text"
                id="Fname"
                className="w-full p-2 border border-gray-300"
                {...register("Fname", { required: "First name is required" })}
              />
              {errors.Fname && (
                <p className="text-red-500">{errors.Fname.message}</p>
              )}
            </div>

            <div className="w-1/2">
              <label htmlFor="Lname" className="block">
                Last name
              </label>
              <br />
              <input
                type="text"
                id="Lname"
                className="w-full p-2 border border-gray-300"
                {...register("Lname", { required: "Last name is required" })}
              />
              {errors.Lname && (
                <p className="text-red-500">{errors.Lname.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="Cname" className="block">
              Company name (optional)
            </label>
            <br />
            <input
              type="text"
              id="Cname"
              className="w-full p-2 border border-gray-300"
              {...register("Cname")}
            />
          </div>

          <div>
            <label htmlFor="Country" className="block">
              Country/Region
            </label>
            <br />
            <input
              type="text"
              id="Country"
              className="w-full p-2 border border-gray-300"
              {...register("Country", { required: "Country is required" })}
            />
            {errors.Country && (
              <p className="text-red-500">{errors.Country.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="Street" className="block">
              Street address
            </label>
            <br />
            <input
              type="text"
              id="Street"
              className="w-full p-2 border border-gray-300"
              {...register("Street", {
                required: "Street address is required",
              })}
            />
            {errors.Street && (
              <p className="text-red-500">{errors.Street.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="Town" className="block">
              Town/City
            </label>
            <br />
            <input
              type="text"
              id="Town"
              className="w-full p-2 border border-gray-300"
              {...register("Town", { required: "Town/City is required" })}
            />
            {errors.Town && (
              <p className="text-red-500">{errors.Town.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="PostCode" className="block">
              PostCode/ZIP (optional)
            </label>
            <br />
            <input
              type="text"
              id="PostCode"
              className="w-full p-2 border border-gray-300"
              {...register("PostCode")}
            />
          </div>

          <div>
            <label htmlFor="Phone" className="block">
              Phone
            </label>
            <br />
            <input
              type="text"
              id="Phone"
              className="w-full p-2 border border-gray-300"
              {...register("Phone", { required: "Phone number is required" })}
            />
            {errors.Phone && (
              <p className="text-red-500">{errors.Phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="Email" className="block">
              Email Address
            </label>
            <br />
            <input
              type="email"
              id="Email"
              className="w-full p-2 border border-gray-300"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.Email && (
              <p className="text-red-500">{errors.Email.message}</p>
            )}
          </div>

          <div>
            <label className="block">Additional Information</label>
            <br />
            <textarea
              className="w-full p-2 border border-gray-300"
              {...register("additionalInfo")}
              placeholder="Notes about your order (e.g. special notes for delivery)"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>

      <div className="w-[50%]">
        <h1 className="text-3xl font-bold ">Summary</h1>
        <div className="space-y-2 flex justify-around leading-20 text-[20px] mb-20">
          <div>
            <h1 className="font-bold">Product</h1>
            <p>WebDesign*1</p>
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div>
            <h1 className="font-bold">Subtotal</h1>
            <p>Rs 9,999</p>
            <p>Rs 9,999</p>
            <p>Rs 9,999</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Bank Transfer</h1>
          <p>Please make your payment directly into our bank account...</p>
        </div>
        <div>
          <h1 className="text-sm">
            <input type="checkbox" id="terms" className="mr-2" />I have read and
            agree to the website terms and conditions
          </h1>
        </div>
        <div>
          <button className="bg-green-500 text-white p-2 rounded">
            Continue payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
