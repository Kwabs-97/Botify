import Container from "@/components/misc/Container";
import Header2 from "@/components/typography/Header2";

import { whyChooseBotify } from "@/assets/images";

export default function WhyChooseBotify() {
  return (
    <Container className="bg-white">
      <Header2 className="text-black">Why Choose Botify</Header2>
      <section className="content flex flex-row gap-20 bg-gray-50 rounded-2xl p-16">
        <div className="flex flex-col gap-6 flex-1 min-w-[560px] self-center justify-self-center">
          <Header2 className="text-basicLight">
            Trustworthy Conversations
          </Header2>
          <p className="text-basic">
            {`  Build trust with your customers by leveraging Botify's AI-driven
            chatbots to deliver accurate and reliable responses to their
            queries. With advanced natural language processing capabilities, our
            chatbots provide consistent and trustworthy interactions, enhancing
            user satisfaction and loyalty.
            `}
          </p>
        </div>
        <div className="flex-1 min-w-[616px] flex items-center justify-center">
          <div
            style={{
              backgroundImage: `url(${whyChooseBotify.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "500px",
              width: "500px",
            }}
          ></div>
        </div>
      </section>
    </Container>
  );
}
