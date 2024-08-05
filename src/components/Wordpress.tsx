import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const Wordpress = () => {
  return (
    <>
      <div className="lg:mx-24 mx-5 grid lg:grid-cols-3 mt-10 pb-10">
        <div className="col-span-2 mb-6">
          <Card className=" lg:w-[90%] lg:h-[524px]  py-3">
            <CardBody>
              <img src="/hhr.jpg" alt="" className="h-[400px] w-full" />
            </CardBody>
            <div className="grid grid-cols-3 mx-5 items-center">
              <CardHeader className="col-span-2">
                Helping Hand Realtors
              </CardHeader>
              <Link
                href="https://helpinghandrealtors.com/sunrise-aura/"
                target="__blank">
                <Button
                  color="success"
                  variant="faded"
                  size="lg"
                  className="w-36 flex">
                  View Site
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <div className="">
            <Card className="lg:h-[250px] lg:w-[400px]">
              <CardBody className="space-y-6">
                <img
                  src="/aa.jpg"
                  alt=""
                  className="lg:h-[150px] lg:w-[400px]"
                />
                <div className="grid grid-cols-3">
                  <CardHeader className="col-span-2">
                    Academia Assist
                  </CardHeader>
                  <Link href="https://academiaassist.com/" target="__blank">
                    <Button size="lg" color="success" variant="faded">
                      View Site
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="">
            <Card className="lg:h-[250px] lg:w-[400px]">
              <CardBody className="space-y-6">
                <img
                  src="/srp.jpg"
                  alt=""
                  className="lg:h-[150px] lg:w-[400px]"
                />
                <div className="grid grid-cols-3">
                  <CardHeader className="col-span-2">
                    SR Packer and Movers
                  </CardHeader>
                  <Link href="https://srpackerandmovers.com/" target="__blank">
                    <Button size="lg" color="success" variant="faded">
                      View Site
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordpress;
