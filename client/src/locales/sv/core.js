import dateFns from 'date-fns/locale/sv';

export default {
  dateFns,

  format: {
    date: 'd/M/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "MMMM d 'at' p",
  },

  translation: {
    common: {
      account: 'Konto',
      actions: 'Åtgärder',
      addAttachment_title: 'Bifoga',
      addComment: 'Kommentera',
      addManager_title: 'Lägg till Projektledare',
      addMember_title: 'Lägg till Medlem',
      addUser_title: 'Lägg till Användare',
      administrator: 'Administratör',
      all: 'Alla',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Alla ändringar kommer att sparas automatiskt<br />så fort anslutningen är återställd',
      areYouSureYouWantToDeleteThisAttachment:
        'Är du säker på att du vill ta bort den här bilagan?',
      areYouSureYouWantToDeleteThisBoard: 'Är du säker på att du vill ta bort den här tavlan?',
      areYouSureYouWantToDeleteThisCard: 'Är du säker på att du vill ta bort det här kortet?',
      areYouSureYouWantToDeleteThisComment:
        'Är du säker på att du vill ta bort den här kommentaren?',
      areYouSureYouWantToDeleteThisLabel: 'Är du säker på att du vill ta bort den här etiketten?',
      areYouSureYouWantToDeleteThisList: 'Är du säker på att du vill ta bort den här listan?',
      areYouSureYouWantToDeleteThisProject: 'Är du säker på att du vill ta bort det här projektet?',
      areYouSureYouWantToDeleteThisTask: 'Är du säker på att du vill ta bort den här uppgiften?',
      areYouSureYouWantToDeleteThisUser: 'Är du säker på att du vill ta bort den här användaren?',
      areYouSureYouWantToLeaveBoard: 'Är du säker på att du vill lämna tavlan?',
      areYouSureYouWantToLeaveProject: 'Är du säker på att du vill lämna projektet?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Är du säker på att du vill ta bort den här projektledaren från projektet?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Är du säker på att du vill ta bort den här medlemmen från tavlan?',
      attachment: 'Bilaga',
      attachments: 'Bilagor',
      authentication: 'Autentisering',
      background: 'Bakgrund',
      board: 'Tavla',
      boardNotFound_title: 'Tavla Ej Funnen',
      cardActions_title: 'Kortåtgärder',
      cardNotFound_title: 'Kort Ej Funnet',
      cardOrActionAreDeleted: 'Kort eller åtgärd är borttagen',
      color: 'Färg',
      createBoard_title: 'Skapa Tavla',
      createLabel_title: 'Skapa Etikett',
      createNewOneOrSelectExistingOne: 'Skapa en ny eller välj<br />en redan existerande',
      createProject_title: 'Skapa Projekt',
      createTextFile_title: 'Skapa Textfil',
      currentPassword: 'Nuvarande lösenord',
      dangerZone_title: 'Farozon',
      date: 'Datum',
      dueDate_title: 'Förfallodatum',
      deleteAttachment_title: 'Ta Bort Bilaga',
      deleteBoard_title: 'Ta Bort Tavla',
      deleteCard_title: 'Ta Bort Kort',
      deleteComment_title: 'Ta Bort Kommentar',
      deleteLabel_title: 'Ta Bort Etikett',
      deleteList_title: 'Ta Bort Lista',
      deleteProject_title: 'Ta Bort Projekt',
      deleteTask_title: 'Ta Bort Uppgift',
      deleteUser_title: 'Ta Bort Användare',
      description: 'Beskrivning',
      dropFileToUpload: 'Släpp en fil för att ladda upp',
      editAttachment_title: 'Redigera Bilaga',
      editAvatar_title: 'Redigera Avatar',
      editBoard_title: 'Redigera Tavla',
      editDueDate_title: 'Redigera Förfallodatum',
      editEmail_title: 'Redigera E-mail',
      editLabel_title: 'Redigera Etikett',
      editPassword_title: 'Redigera Lösenord',
      editTimer_title: 'Redigera Timer',
      editUsername_title: 'Redigera Användarnamn',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail används redan',
      enterCardTitle: 'Ange kortets titel...',
      enterDescription: 'Ange beskrivning...',
      enterFilename: 'Ange filnamn',
      enterListTitle: 'Ange listans titel...',
      enterProjectTitle: 'Ange projektets titel',
      enterTaskDescription: 'Ange uppgiftsbeskrivning...',
      filterByLabels_title: 'Filtrera Efter Etiketter',
      filterByMembers_title: 'Filtrera Efter Medlemmar',
      fromComputer_title: 'Från dator',
      general: 'Allmänt',
      hours: 'Timmar',
      invalidCurrentPassword: 'Ogiltigt nuvarande lösenord',
      labels: 'Etiketter',
      leaveBoard_title: 'Lämna Tavla',
      leaveProject_title: 'Lämna Projekt',
      list: 'Lista',
      listActions_title: 'Liståtgärder',
      managers: 'Projektledare',
      members: 'Medlemmar',
      minutes: 'Minuter',
      moveCard_title: 'Flytta Kort',
      name: 'Namn',
      newEmail: 'Ny e-mail',
      newPassword: 'Nytt lösenord',
      newUsername: 'Nytt användarnamn',
      noConnectionToServer: 'Ingen anslutning till servern',
      noBoards: 'Inga tavlor',
      noLists: 'Inga listor',
      noProjects: 'Inga projekt',
      notifications: 'Notifikationer',
      noUnreadNotifications: 'Inga olästa notifikationer',
      openBoard_title: 'Öppna Tavla',
      optional_inline: 'valfri',
      organization: 'Organisation',
      phone: 'Telefon',
      preferences: 'Preferenser',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tips: tryck på Ctrl-V (Cmd-V på Mac) för att lägga till en bilaga från urklipp.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt Ej Funnet',
      removeManager_title: 'Ta Bort Projektledare',
      removeMember_title: 'Ta Bort Medlem',
      seconds: 'Sekunder',
      selectBoard: 'Välj tavla',
      selectList: 'Välj lista',
      selectProject: 'Välj projekt',
      settings: 'Inställningar',
      subscribeToMyOwnCardsByDefault: 'Prenumerera på mina egna kort som standard',
      taskActions_title: 'Uppgiftsåtgärder',
      tasks: 'Uppgifter',
      time: 'Tid',
      timer: 'Timer',
      title: 'Titel',
      userActions_title: 'Användaråtgärder',
      userAddedThisCardToList: '<0>{{user}}</0><1> lade till detta kort i {{list}}</1>',
      userLeftNewCommentToCard: '{{user}} lämnade en ny kommentar «{{comment}}» på <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} flyttade <2>{{card}}</2> från {{fromList}} till {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> flyttade detta kort från {{fromList}} till {{toList}}</1>',
      username: 'Användarnamn',
      usernameAlreadyInUse: 'Användarnamnet används redan',
      users: 'Användare',
      writeComment: 'Skriv en kommentar...',
    },

    action: {
      addAnotherCard: 'Lägg till ytterligare ett kort',
      addAnotherList: 'Lägg till ytterligare en lista',
      addAnotherTask: 'Lägg till ytterligare en uppgift',
      addCard: 'Lägg till kort',
      addCard_title: 'Lägg Till Kort',
      addComment: 'Lägg till kommentar',
      addList: 'Lägg till lista',
      addMoreDetailedDescription: 'Lägg till en mer detaljerad beskrivning',
      addTask: 'Lägg till uppgift',
      addToCard: 'Lägg till i kort',
      addUser: 'Lägg till användare',
      createBoard: 'Skapa tavla',
      createFile: 'Skapa fil',
      createLabel: 'Skapa etikett',
      createNewLabel: 'Skapa ny etikett',
      createProject: 'Skapa projekt',
      delete: 'Ta Bort',
      deleteAttachment: 'Ta bort bilaga',
      deleteAvatar: 'Ta bort avatar',
      deleteBoard: 'Ta bort tavla',
      deleteCard: 'Ta bort kort',
      deleteCard_title: 'Ta Bort Kort',
      deleteComment: 'Ta bort kommentar',
      deleteImage: 'Ta bort bild',
      deleteLabel: 'Ta bort etikett',
      deleteList: 'Ta bort lista',
      deleteList_title: 'Ta Bort Lista',
      deleteProject: 'Ta bort projekt',
      deleteProject_title: 'Ta Bort Projekt',
      deleteTask: 'Ta bort uppgift',
      deleteTask_title: 'Ta Bort Uppgift',
      deleteUser: 'Ta bort användare',
      edit: 'Redigera',
      editDueDate_title: 'Redigera Förfallodatum',
      editDescription_title: 'Redigera Beskrivning',
      editEmail_title: 'Redigera E-mail',
      editPassword_title: 'Redigera Lösenord',
      editTimer_title: 'Redigera Timer',
      editTitle_title: 'Redigera Titel',
      editUsername_title: 'Redigera Användarnamn',
      leaveBoard: 'Lämna tavla',
      leaveProject: 'Lämna projekt',
      logOut_title: 'Logga ut',
      makeCover_title: 'Skapa Omslagsbild',
      move: 'Flytta',
      moveCard_title: 'Flytta Kort',
      remove: 'Ta Bort',
      removeBackground: 'Ta bort bakgrund',
      removeCover_title: 'Ta Bort Omslagsbild',
      removeFromBoard: 'Ta bort from tavla',
      removeFromProject: 'Ta bort from projekt',
      removeManager: 'Ta bort projektledare',
      removeMember: 'Ta bort medlem',
      save: 'Spara',
      showAllAttachments: 'Visa alla bilagor ({{hidden}} dolda)',
      showFewerAttachments: 'Visa färre bilagor',
      start: 'Starta',
      stop: 'Stoppa',
      subscribe: 'Prenumerera',
      unsubscribe: 'Avprenumerera',
      uploadNewAvatar: 'Ladda upp ny avatar',
      uploadNewImage: 'Ladda upp ny bild',
    },
  },
};
