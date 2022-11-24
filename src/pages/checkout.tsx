import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { CoffeeCartList } from "../components/Coffee/CoffeeCartList";
import { Icon } from "../components/Icon";
import { Input } from "../components/Input";
import { SelectGroup } from "../components/Select/SelectGroup";
import { usePurchase } from "../context/hooks/usePurchase";
import { CheckoutFieldCard, CheckoutFieldSubtitle, CheckoutFieldTitle, CheckoutFormContainer, CheckoutSectionTitle } from "../layout/Checkout/styles";

export default function CheckoutPage() {
  const { onConfirmPurchase } = usePurchase();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(-1);
  const { register, handleSubmit } = useForm();

  function handleOnChangeSelectedPaymentMethod(method: number) {
    setSelectedPaymentMethod(method);
  }

  return (
    <>
      <Head>
        <title>Coffee Delivery - Confirmar compra</title>
      </Head>
      <CheckoutFormContainer onSubmit={handleSubmit(onConfirmPurchase(selectedPaymentMethod))}>
        <fieldset className="flex flex-col min-w-[50%]">
          <CheckoutSectionTitle>Complete seu pedido</CheckoutSectionTitle>
          <CheckoutFieldCard>
            <div className="flex flex-row gap-2">
              <Icon className="text-yellow-dark" name="MapPinLine"/>
              <div className="flex flex-col gap-[2xp]">
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
          </CheckoutFieldCard>
          <CheckoutFieldCard>
            <div className="flex flex-row gap-2">
              <Icon className="text-purple-default" name="CurrencyDollar"/>
              <div className="flex flex-col gap-[2xp]">
                <CheckoutFieldTitle>Pagamento</CheckoutFieldTitle>
                <CheckoutFieldSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CheckoutFieldSubtitle>
              </div>
            </div>

            <div className="flex flex-row flex-wrap mt-8 gap-3">
              <SelectGroup
                onChangeSelectedItem={handleOnChangeSelectedPaymentMethod}
                items={[
                  {
                    text: "CARTÃO DE CRÉDITO",
                    icon: <Icon name="CreditCard"/>
                  },
                  {
                    text: "CARTÃO DE DÉBITO",
                    icon: <Icon name="Bank"/>
                  },
                  {
                    text: "DINHEIRO",
                    icon: <Icon name="Money"/>
                  }
                ]}
              />
            </div>
          </CheckoutFieldCard>
        </fieldset>
        <fieldset className="flex flex-row min-w-[40%]">
          <CheckoutSectionTitle>Cafés selecionados</CheckoutSectionTitle>
          <CheckoutFieldCard className="gap-6 rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md">
            <CoffeeCartList/>
            <Button type="submit">CONFIRMAR PEDIDO</Button>
          </CheckoutFieldCard>
        </fieldset>
      </CheckoutFormContainer>
    </>
  );
}