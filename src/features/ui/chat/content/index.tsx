import { url, movie } from '@/functions/constants/regex'

export const Content = (data: { text: string }) => {

  const { text } = data;

  const textUrlDivision = text.split(url);
  const matchesUrl = text.match(url) || [];

  const handleVideoUrl = (url: string) => {
    return url.toLowerCase().match(movie);
  };

  const handlePdfUrl = (url: string) => {
    return url.toLowerCase().endsWith('.pdf');
  };


  return (
    <>
      {textUrlDivision.map((item, index) => {
        if (matchesUrl.includes(item)) {
          if (handleVideoUrl(item)) {
            return (
              <span key={`video-${item}`}>{item}</span>
            )
          }
          else if (handlePdfUrl(item)) {
            return (
              <a
                key={`pdf-${item}`}
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2563eb', textDecoration: 'underline' }}
              >
                {item}
              </a>
            )
          }
          else {
            return (
              <span key={`url-${item}`}>{item}</span>
            );
          }
        }
        else {
          return (
            <span key={index}>{item}</span>
          )
        }
      })}
    </>
  )
}

export default Content