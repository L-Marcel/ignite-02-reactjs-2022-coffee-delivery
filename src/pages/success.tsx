import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Icon } from "../components/Icon";
import { SuccessDeliveryInformation, SuccessDeliveryInformationsList, SuccessDeliveryInformationsListContainer, SuccessDeliveryInformationsListItem, SuccessDeliveryInformationTopicIconContainer, SuccessMainContainer, SuccessSubtitle, SuccessTitle } from "../layout/Success/styles";

export default function SuccessPage() {
  const router = useRouter();
  const { street, number, district, city, UF, paymentMethod } = router.query;

  useEffect(() => {
    if(!street || !number || !district || !city || !UF || !paymentMethod) {
      router.push("/");
    }
  }, [router, street, number, district, city, UF, paymentMethod]);

  return (
    <>
      <Head>
        <title>Coffee Delivery - Sucesso</title>
      </Head>
      <SuccessMainContainer>
        <div className="flex flex-col gap-1">
          <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
          <SuccessSubtitle>Agora é só aguardar que logo o café chegará até você</SuccessSubtitle>
        </div>
        <section className="flex flex-row gap-24 items-center">
          <SuccessDeliveryInformationsListContainer>
            <SuccessDeliveryInformationsList>
              <SuccessDeliveryInformationsListItem>
                <SuccessDeliveryInformationTopicIconContainer className="bg-purple-default">
                  <Icon 
                    name="MapPin"
                  />
                </SuccessDeliveryInformationTopicIconContainer>
                <SuccessDeliveryInformation>
                  <p>Entrega em <strong className="capitalize">{street}, {number}</strong></p>
                  <p className="capitalize">{district} - {city}, {UF}</p>
                </SuccessDeliveryInformation>
              </SuccessDeliveryInformationsListItem>
              <SuccessDeliveryInformationsListItem>
                <SuccessDeliveryInformationTopicIconContainer>
                  <Icon 
                    name="Timer"
                  />
                </SuccessDeliveryInformationTopicIconContainer>
                <SuccessDeliveryInformation>
                  <p>Previsão de entrega</p>
                  <p><strong>20 min - 30 min</strong></p>
                </SuccessDeliveryInformation>
              </SuccessDeliveryInformationsListItem>
              <SuccessDeliveryInformationsListItem>
                <SuccessDeliveryInformationTopicIconContainer className="bg-yellow-dark">
                  <Icon 
                    name="CurrencyDollar"
                  />
                </SuccessDeliveryInformationTopicIconContainer>
                <SuccessDeliveryInformation>
                  <p>Pagamento na entrega</p>
                  <p><strong>{paymentMethod}</strong></p>
                </SuccessDeliveryInformation>
              </SuccessDeliveryInformationsListItem>
            </SuccessDeliveryInformationsList>
          </SuccessDeliveryInformationsListContainer>
          <Image
            alt="Um entregador em uma moto roxa indo deixar seu café"
            src="/assets/Delivery.png"
            width={492}
            height={293}
          />
        </section>
      </SuccessMainContainer>
    </>
  );
}