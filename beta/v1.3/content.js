chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'checkEmptyLinks') {
      const allLinks = document.querySelectorAll('a');
  
      let emptyLinksDetected = false;

      allLinks.forEach(link => {
        if (link.getAttribute('href') === '') {
          // console.warn('Empty link found:', link);
          link.style.border = '2px solid #D2333D';
          link.style.padding = '2px';
          emptyLinksDetected = true;
        }
      });
  
      if (!emptyLinksDetected) {
        alert('No empty links found.');
      }
    }
  
    if (request.action === 'checkTargetBlank') {
      const allLinks = document.querySelectorAll('a');
  
      let allLinksHaveTargetBlank = true;
  
      allLinks.forEach(link => {
        if (!link.getAttribute('target') || link.getAttribute('target') !== '_blank') {
          // console.warn('Link without target="_blank" found:', link);
          link.style.border = '2px solid #E17F3F';
          link.style.padding = '2px';
          allLinksHaveTargetBlank = false;
        }
      });
  
      if (allLinksHaveTargetBlank) {
        alert('Everything is okay. All links have target="_blank".');
      }
    }
  
  if (request.action === 'checkRolePresentation') {
      const allTable = document.querySelectorAll('table');

      let alltableHaveRolePresentation = true;

      allTable.forEach(table => {
        if (!table.getAttribute('role') || table.getAttribute('role') !== 'presentation') {
          // console.warn('Table without role="presentation" found:', table);
          table.style.border = '2px solid #612CB0';
          alltableHaveRolePresentation = false;
        }
      });

      if (alltableHaveRolePresentation) {
        alert('Everything is okay. All Table have role="presentation".');
      }
    }
});
  