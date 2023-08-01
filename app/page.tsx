"use client";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between b-8 text-justify pl-8 pr-8 pb-8 pt-8 md:pl-16 md:pr-16 md:pb-16 md:pt-4 lg:pl-24 lg:pr-24 lg:pb-24 lg:pt-8">
      <h3 className="mb-2 mt-8 text-3xl font-medium leading-tight text-primary">
        ¿Quienes somos?
      </h3>
      <div className="ml-4 mr-4 mt-2 md:ml-16 md:mr-16 md:mt-6 lg:ml-24 lg:mr-24 lg:mt-8">
        <p className="pt-2">
          <b>{`La Sonrisa de Bruno `}</b>
          nace en Abril del 2023 con un claro objetivo: ayudar a la
          investigación de lo stumores cerebrales infantiles y apoyar a los
          cuidados paliativos tan necesarios que brinda apoyo tanto a niños como
          a familiares en este duro camino.
        </p>
        <p className="pt-2">
          Cuando el 2 de agosto de 2022 nos dan la noticia de que Bruno padece
          un glioma de alto grado nuestro mundo se derrumba, pero la actitud de
          mi hijo durante todo el proceso es quien nos da las fuerzas necesarias
          para seguir luchando y no perder la esperanza.
        </p>
        <p className="pt-2">
          7 meses después del diagnóstico y pasando por una operación y varios
          tratamientos Bruno fallece. Aunque sabemos que nada nos lo va a
          devolver, nuestra ilusión no es otra que la de mantener viva la
          sonrisa de todos los niños apoyando a los héroes enmascarados de esta
          historia: <b>los investigadores.</b>
        </p>
        <p className="pt-2">
          Para ello necesitamos de toda la solidaridad posible para hacer
          realidad nuestro mayor objetivo:{" "}
          <b>la desaparición del cáncer infantil.</b>
        </p>
      </div>
      <h3 className="mb-2 mt-16 text-3xl font-medium leading-tight text-primary">
        Nuestra Misión:
      </h3>
      <div className="ml-4 mr-4 mt-2 md:ml-16 md:mr-16 md:mt-6 lg:ml-24 lg:mr-24 lg:mt-8">
        <p className="pt-2">
          <b>-Apoyar y ayudar a la investigación del cáncer infantil</b>
        </p>
        <p className="pt-2">
          <b>
            -Y como muy bien dice su lema, cuando no se puede curar, hay que
            cuidar... ¿Cómo? Con los cuidados paliativos apoyando a los niños y
            a sus familiares.
          </b>
        </p>
      </div>
    </main>
  );
}
