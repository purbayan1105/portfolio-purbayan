import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

const Shopify = () => {
  return (
    <>
      <div className="lg:mx-24 mx-5 grid lg:grid-cols-3 mt-10 pb-10">
        {" "}
        <div className="col-span-2 mb-6">
          <Card className=" lg:w-[90%] lg:h-[524px]  py-3">
            <CardBody>
              <img src="/shop.jpg" alt="" className="h-[400px] w-full" />
            </CardBody>
            <div className="grid grid-cols-3 mx-5 items-center">
              <CardHeader className="col-span-2">Care N Class</CardHeader>
              <Link href="https://carenclass.com/" target="__blank">
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
      </div>
    </>
  );
};

export default Shopify;
