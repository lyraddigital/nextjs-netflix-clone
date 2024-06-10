import { AccordionEntry } from "@/app/models/shared/accordions/accordion-entry";

export const getFAQItems = (): AccordionEntry[] => {
  return [
    {
      title: 'What is Netflix?', description: (
        <>
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want – all for one low monthly price. There&pos;s always something new to discover, and new TV shows and movies are added every week!
          </p>
        </>
      )
    },
    {
      title: 'How much does Netflix cost?', description: (
        <>
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $25.99 per month. No extra costs, no contracts.
          </p>
        </>
      )
    },
    {
      title: 'How do I cancel?', description: (
        <>
          <p>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.
            There are no cancellation fees – start or stop your account at any time.
          </p>
        </>
      )
    },
    {
      title: 'What can I watch on Netflix?', description: (
        <>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix Originals and more.
            Watch as much as you want, at any time that you want.
          </p>
        </>
      )
    },
    {
      title: 'Is Netflix good for kids?', description: (
        <>
          <p>
            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
          </p>
          <p>
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </p>
        </>
      )
    }
  ];
};