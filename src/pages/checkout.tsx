import Head from "next/head";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { CheckoutFormContainer, CheckoutSectionTitle } from "../layout/Checkout/styles";

export default function CheckoutPage() {
  const { register } = useForm();

  return (
    <>
      <Head>
        <title>Coffee Delivery - Checkout</title>
      </Head>
      <CheckoutFormContainer>
        <fieldset className="flex flex-row min-w-[50%]">
          <CheckoutSectionTitle>Complete seu pedido</CheckoutSectionTitle>
          <div className="bg-base-card flex flex-col w-full px-2 py-2">
            <Input register={register("CPF", { required: true })}/>
            <Input register={register("street", { required: true })}/>
            <Input register={register("number", { required: true })}/>
            <Input register={register("complement", { required: false })}/>
            <Input register={register("district", { required: true })}/>
            <Input register={register("city", { required: true })}/>
            <Input register={register("UF", { required: true })}/>
          </div>
          <div>
            
          </div>
        </fieldset>
        <fieldset className="flex flex-row min-w-[40%]">
          <CheckoutSectionTitle>Cafés selecionados</CheckoutSectionTitle>
          <div>
            
          </div>
        </fieldset>
      </CheckoutFormContainer>
    </>
  );
}