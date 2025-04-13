import { Collection } from "~/components/collection";
import { Footer } from "~/components/footer";
import Link from "~/components/link";
import { Me } from "~/components/me";
import * as FadeIn from "~/components/motion";
import { Spacer } from "~/components/spacer";

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <Me />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <div className="flex justify-between">
          <h1>
            <span className="underline font-bold decoration-2 decoration-[#27ae60]">
              Peerlist
            </span>
            {" - "}
            UI Animation Challenges
          </h1>
        </div>
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <p>
          This project is{" "}
          <Link
            underline
            text="my"
            href="https://github.com/fecony/peerlist-challenge"
            className="decoration-red-700"
          />{" "}
          personal take on the{" "}
          <Link
            underline
            href="https://peerlist.io/challenges/ui-animation-challenge"
            text="Peerlist UI Animation Challenge"
          />
          , a 5-day event designed to sharpen UI animation skills through daily
          challenges.
        </p>
        <p>
          Each day presents a new animation challenge, encouraging creativity
          and technical growth.
        </p>
      </FadeIn.Item>

      <FadeIn.Item>
        <Collection title="challenges" />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
