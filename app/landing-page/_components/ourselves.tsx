import Card from "$/components/card";
import Image from "next/image";
export default function Overselves() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-12">
      <Card
        icon={
          <Image
            src={"/cards-images/arrow.png"}
            width={200}
            height={200}
            alt="Arrow in the bow image"
          />
        }
        title="Our Mission"
      >
        We&apos;re a nationally recognized web design company with a targeted
        local presence. What does that mean for you? Your site is expertly
        designed and marketed by professionals who are wizards when it comes to
        turing users into raving fanatics and generating consistent leads for
        your business.Design with style provides a full service, in house web
        design and digital marketing agency with over 13 years of experience in
        the creative industry. We develop integrated marketing solutions that
        drive business and boost revenue. We don&apos;t need to outsource your
        work overseas or to robots. We are real people, with a real passion for
        what we do.
      </Card>
      <Card
        icon={
          <Image
            src={"/cards-images/scope.png"}
            width={200}
            height={200}
            alt="Scope"
          />
        }
        title="Our vision"
      >
        We&apos;re a nationally recognized web design company with a targeted
        local presence. What does that mean for you? Your site is expertly
        designed and marketed by professionals who are wizards when it comes to
        turing users into raving fanatics and generating consistent leads for
        your business.Design with style provides a full service, in house web
        design and digital marketing agency with over 13 years of experience in
        the creative industry. We develop integrated marketing solutions that
        drive business and boost revenue. We don&apos;t need to outsource your
        work overseas or to robots. We are real people, with a real passion for
        what we do.
      </Card>
      <Card
        icon={
          <Image
            src={"/cards-images/settings.png"}
            width={200}
            height={200}
            alt="Settings"
          />
        }
        title="Our Strategy"
      >
        We&apos;re a nationally recognized web design company with a targeted
        local presence. What does that mean for you? Your site is expertly
        designed and marketed by professionals who are wizards when it comes to
        turing users into raving fanatics and generating consistent leads for
        your business.Design with style provides a full service, in house web
        design and digital marketing agency with over 13 years of experience in
        the creative industry. We develop integrated marketing solutions that
        drive business and boost revenue. We don&apos;t need to outsource your
        work overseas or to robots. We are real people, with a real passion for
        what we do.
      </Card>
    </div>
  );
}
