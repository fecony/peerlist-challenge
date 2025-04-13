import { Outlet } from "react-router";
import { Breadcrumb } from "~/components/breadcrumb";
import { Footer } from "~/components/footer";
import { Me } from "~/components/me";
import * as FadeIn from "~/components/motion";
import { Spacer } from "~/components/spacer";

export default function Layout() {
  return (
    <FadeIn.Container className="w-full">
      <FadeIn.Item>
        <Me />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <Breadcrumb />
      </FadeIn.Item>

      <FadeIn.Item>
        <Outlet />
      </FadeIn.Item>

      <Spacer />

      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
