import Head from "next/head";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { CheckoutFieldSubtitle, CheckoutFieldTitle, CheckoutFormContainer, CheckoutSectionTitle } from "../layout/Checkout/styles";

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
          <div className="bg-base-card flex flex-col w-full p-10 mt-4">
            <div>
              <div>
                <CheckoutFieldTitle>Endereço de entrega</CheckoutFieldTitle>
                <CheckoutFieldSubtitle>Informe o endereço onde deseja receber seu pedido</CheckoutFieldSubtitle>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-checkout-form gap-y-4 gap-x-3">
              <Input 
                labelClassName="col-auto"
                placeholder="CEP" 
                register={register("CEP", { required: true })}
              />
              <Input 
                labelClassName="col-span-3"
                placeholder="Rua" 
                register={register("street", { required: true })}
              />
              <Input 
                labelClassName="col-span-1"
                placeholder="Número" 
                register={register("number", { required: true })}
              />
              <Input 
                labelClassName="col-span-2"
                placeholder="Complemento" required={false} 
                register={register("complement", { required: false })}
              />
              <Input 
                labelClassName="col-span-1"
                placeholder="Bairro" 
                register={register("district", { required: true })}
              />
              <Input 
                labelClassName="col-span-1"
                placeholder="Cidade" 
                register={register("city", { required: true })}
              />
              <Input 
                labelClassName="col-span-1"
                placeholder="UF" 
                register={register("UF", { required: true })}
              />
            </div>
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