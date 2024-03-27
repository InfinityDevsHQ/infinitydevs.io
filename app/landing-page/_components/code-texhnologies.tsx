import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <div className="grid lg:grid-cols-5 gap-16 items-center mb-12">
      <div className="image-flex">
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/wordpress.png"}
            alt="WordPress logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/mysql.png"}
            alt="MySql logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/angular.png"}
            alt="angular logo"
            width={200}
            height={200}
          />
        </span>
      </div>
      <div className="image-flex">
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/nodejs.png"}
            alt="Nodejs logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/codeigniter.png"}
            alt="codeigniter logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/reactjs.png"}
            alt="reactjs logo"
            width={200}
            height={200}
          />
        </span>
      </div>
      <div className="image-flex">
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/php.png"}
            alt="php logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/dumb.png"}
            alt="dumb logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/jquery.png"}
            alt="jquery logo"
            width={200}
            height={200}
          />
        </span>
      </div>
      <div className="image-flex">
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/mangodb.png"}
            alt="mangodb logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/react-native.png"}
            alt="react-native logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/bootstrap.png"}
            alt="bootstrap logo"
            width={200}
            height={200}
          />
        </span>
      </div>
      <div className="image-flex">
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/postgresql.png"}
            alt="postgresql logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/vue.png"}
            alt="vue logo"
            width={200}
            height={200}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/technologies/sass.png"}
            alt="sass logo"
            width={200}
            height={200}
          />
        </span>
      </div>
    </div>
  );
}
