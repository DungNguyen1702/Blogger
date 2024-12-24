import React from 'react';

export function TruncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
}

export function convertToHTML(htmlString: string): JSX.Element {
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlString } });
}

export function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function convertDateFromArrayToString(dateArray: number[] | string): string {
  if (!Array.isArray(dateArray)) {
    return dateArray as string;
  }
  let [year, month, day] = dateArray;
  const paddedMonth = month.toString().padStart(2, '0');
  const paddedDay = day.toString().padStart(2, '0');
  return `${year}-${paddedMonth}-${paddedDay}`;
}

export function truncateHTMLString(htmlString: string, maxLength: number): string {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(htmlString, 'text/html');

  const paragraphs = htmlDocument.querySelectorAll('p');
  const firstParagraph = paragraphs[0]?.textContent || '';
  const secondParagraph = paragraphs[1]?.textContent || '';

  const combinedContent = `${firstParagraph}<br><br/>${secondParagraph}`;

  if (combinedContent.length > maxLength) {
    const truncatedContent = `${combinedContent.substring(0, maxLength)}...`;
    return truncatedContent;
  } else {
    return combinedContent;
  }
}

export function mainContentHTML(htmlString: string, maxLength: number): JSX.Element {
  const truncatedContent = truncateHTMLString(htmlString, maxLength);
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: truncatedContent } });
}
