const festivalList: {
  name: string;
  dates?: string;
  events?: string;
  links?: { name: string; href: string }[];
}[] = [
  {
    name: 'WSAF',
    dates: '20-24 June 2004',
    events: '50+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/',
      },
    ],
  },
  {
    name: "WSAF '05",
    dates: '19-23 June 2005',
    links: [
      {
        name: 'Warwick Blog',
        href: 'https://web.archive.org/web/20210918050951/https://blogs.warwick.ac.uk/wsaf/?num=10&start=10',
      },
    ],
  },
  {
    name: "WSAF '06",
  },
  {
    name: "WSAF '07",
    dates: '24-28 June 2007',
    events: '77+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20070630063134/http://www.wsaf.org.uk/',
      },
    ],
  },
  {
    name: "WSAF '08",
    dates: '22-26 June 2008',
    events: '65+',
    links: [
      {
        name: 'Website',
        href: 'https://web.archive.org/web/20081007200600/http://www.wsaf.org.uk/',
      },
    ],
  },
  {
    name: 'SPLAT-Fest',
    dates: '21-25 June 2009',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20090524043909/http://wsaf.org.uk/',
      },
      {
        name: 'Press Release',
        href: 'https://warwick.ac.uk/newsandevents/pressreleases/award-winning_author_to/',
      },
    ],
  },
  {
    name: 'WSAF 2010',
    dates: '25-28 June 2010',
    events: '100+',
    links: [
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/wsaf2010',
      },
    ],
  },
  {
    name: 'WSAF 2011',
    dates: '25-28 June 2011',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20110628003050/http://www.wsaf.co.uk/about.php',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/warwick-student-arts-festival-2011',
      },
    ],
  },
  {
    name: 'WSAF 2012',
    dates: '24-27 June 2012',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20120710055823/http://www.wsaf.co.uk/whatiswsaf.php',
      },
      {
        name: 'News Article',
        href: 'https://warwick.ac.uk/newsandevents/news-old/wsaf_2012/',
      },
    ],
  },
  {
    name: 'WSAF 2013',
    dates: '22-25 June 2013',
    links: [
      {
        name: 'Website',
        href: 'http://web.archive.org/web/20130810135711/http://wsaf.co.uk/whatiswsaf.php',
      },
    ],
  },
  {
    name: 'WSAF 2014',
  },
  {
    name: 'WSAF 2015',
    dates: '21-24 June 2015',
    events: '130',
    links: [
      {
        name: 'Facebook Page',
        href: 'https://www.facebook.com/warwickstudentartsfest/',
      },
    ],
  },
  {
    name: 'WSAF 2024',
    dates: '8-10 June 2024',
    events: '50+',
  },
];

export default function FestivalsTable() {
  return (
    <table className="mx-auto table-auto bg-secondary border-2 border-accent m-4">
      <tr className="uppercase text-lg">
        <th className="px-4 py-0.5">Name</th>
        <th className="px-4 py-0.5">Dates</th>
        <th className="px-4 py-0.5">Events</th>
        <th className="px-4 py-0.5">Links</th>
      </tr>
      {festivalList.map((festival) => (
        <tr key={festival.name} className="border-t border-accent">
          <th className="px-4 py-0.5">{festival.name}</th>
          <td className="px-4 py-0.5">{festival.dates || '-'}</td>
          <td className="px-4 py-0.5">{festival.events || '-'}</td>
          <td className="px-4 py-0.5">
            {festival.links
              ? festival.links.map((link) => (
                  <a
                    key={link.href}
                    target="_blank"
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-accent block"
                  >
                    {link.name}
                  </a>
                ))
              : '-'}
          </td>
        </tr>
      ))}
    </table>
  );
}
