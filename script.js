function toggleItem() {
      var itemClass = this.parentNode.className;

      // Hide all items
      for ( var i = 0; i < accordionItems.length; i++ ) {
        accordionItems[i].className = 'accordionItem hide';
      }

      // Show this item if it was previously hidden
      if ( itemClass == 'accordionItem hide' ) {
        this.parentNode.className = 'accordionItem';

      }
    }