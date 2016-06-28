function doGet() {
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheet/ccc?key=0Ahi543aUoCw-dGlCSnNXV0R5Y0FaRVZtcXlyMV9sMHc#gid=0")
  var palmifySheet = ss.getSheetByName('palmify');
  var projectApp = UiApp.createApplication();
  projectApp.setTitle("PALM Form");
  var ownerName = 'David Williamson';
  var gmail = 'davidwilliamson82@gmail.com';
  var panel = projectApp.createVerticalPanel().setId('face'); 
  var selector = projectApp.createListBox(true);
  selector.setName('selectionBox').setId('selectionBox').addItem('New');
  var stuff = palmifySheet.getDataRange().getValues();
  for (var i=0; i < stuff.length; i++){
    if (stuff [i][1] != gmail){
      continue;
    }
    selector.addItem(stuff [i][5]);
  }
  selector.setSelectedIndex(0);
  var selectHandler = projectApp.createServerChangeHandler('goFunky');
  selectHandler.addCallbackElement(panel);
  selector.addChangeHandler(selectHandler);
  
  var nameLabel = projectApp.createLabel('Project Owner: ' + ownerName).setId('nameLabel');
  var gmailLabel = projectApp.createLabel('gmail: '+ gmail).setId('gmailLabel');
  var savedLabel = projectApp.createLabel('Thank you for your submission.');
  savedLabel.setVisible(false).setId('sLabel');
  var selectorLabel = projectApp.createHTML("<br><b>Select item from list.</b>").setId('selectLabel');
  var emailLabel = projectApp.createHTML("<br><b>Contact Email</b><br>Please enter the address for the email account you would prefer to use.").setWidth('80%');
  var emailField = projectApp.createTextArea().setSize('200px', '25px');
  emailField.setName('emailArea').setId('emailArea'); 
  var phoneLabel = projectApp.createHTML("<br><b>Phone Number</b><br>Please enter a phone number that we may contact you with.").setWidth('80%');
  var phoneField = projectApp.createTextArea().setSize('200px', '25px');
  phoneField.setName('phoneArea').setId('phoneArea');  
  var titleLabel = projectApp.createHTML("<br><b>Project Title</b>");
  var titleField = projectApp.createTextArea().setSize('200px', '25px');
  titleField.setName('titleArea').setId('titleArea');  
  var beginDateLabel = projectApp.createHTML("<br><b>Start Date</b><br>When was this project opened?").setWidth('80%');
  var beginDateField = projectApp.createTextBox();
  beginDateField.setName('beginDateBox').setId('beginDateBox');  
  var summaryLabel = projectApp.createHTML("<br><b>Project Summary</b><br>Please describe what this project is.").setWidth('80%');
  var summaryField = projectApp.createTextArea().setSize('80%', '75px');
  summaryField.setName('summaryArea').setId('summaryArea');  
  var progressLabel = projectApp.createHTML("<br><b>Project Progress</b><br>What sorts of milestones, deadlines does your project have?").setWidth('80%');
  var progressField = projectApp.createTextArea().setSize('80%', '75px');
  progressField.setName('progressArea').setId('progressArea');  
  var situationLabel = projectApp.createHTML("<br><b>Situation</b><br>What needs do you hope to address with this project? What assets do you possess to meet these needs? What are the symptoms, vs the root problems? Who will benefit from this project, and what will their involvement be?").setWidth('80%');
  var situationField = projectApp.createTextArea().setSize('80%', '75px');
  situationField.setName('situationArea').setId('situationArea');  
  var prioritiesLabel = projectApp.createHTML("<br><b>Priorities</b><br>What values does this project focus on? What is mandatory for the success of this project? What resources are needed? What are the local dynamics? Who will be a collaborator? Will there be any competition?").setWidth('80%');
  var prioritiesField = projectApp.createTextArea().setSize('80%', '75px');
  prioritiesField.setName('prioritiesArea').setId('prioritiesArea'); 
  var inputsLabel = projectApp.createHTML("<br><b>Inputs</b><br>What staff, volunteers, time, money, research base, materials, equipment, technology, partners will be invested?").setWidth('80%');
  var inputsField = projectApp.createTextArea().setSize('80%', '75px');
  inputsField.setName('inputsArea').setId('inputsArea'); 
  var activitiesLabel = projectApp.createHTML("<br><b>Activities</b><br>What sort of workshops, meetings will be conducted? What sort of services will be delivered? What products, curriculum, resources will be delivered? What training, counseling will be provided? What assessments, facilitation will be provided? Who will be partnered with? What will the media outreach look like?").setWidth('80%');
  var activitiesField = projectApp.createTextArea().setSize('80%', '75px');
  activitiesField.setName('activitiesArea').setId('activitiesArea'); 
  var participationLabel = projectApp.createHTML("<br><b>Participation</b><br>What particiants, clients, agencies, decision-makers, customers will be participating? What satisfaction will be gained?.").setWidth('80%');
  var participationField = projectApp.createTextArea().setSize('80%', '75px');
  participationField.setName('participationArea').setId('participationArea'); 
  var shortTermLabel = projectApp.createHTML("<br><b>Short-Term Outcomes</b><br>What awareness, knowledge, attitudes, skills, opinions, aspirations, motivations, will be gained in the short term?").setWidth('80%');
  var shortTermField = projectApp.createTextArea().setSize('80%', '75px');
  shortTermField.setName('shortTermArea').setId('shortTermArea'); 
  var mediumTermLabel = projectApp.createHTML("<br><b>Medium-Term Outcomes</b><br>What behaviors, practices, decision-making, policies, social action will change as this project progresses?").setWidth('80%');
  var mediumTermField = projectApp.createTextArea().setSize('80%', '75px');
  mediumTermField.setName('mediumTermArea').setId('mediumTermArea');
  var ultimateLabel = projectApp.createHTML("<br><b>Ultimate Outcomes</b><br>What social, economical, civic, environmental conditions will have changed as a result of this project?").setWidth('80%');
  var ultimateField = projectApp.createTextArea().setSize('80%', '75px');
  ultimateField.setName('ultimateArea').setId('ultimateArea');
  
  var saveButton = projectApp.createButton('Save');
  var saveHandler = projectApp.createServerClickHandler('saved');
  saveHandler.addCallbackElement(panel);
  saveButton.addClickHandler(saveHandler);
  panel.setSpacing(6);
 
  panel.add(nameLabel);
  panel.add(gmailLabel);
  panel.add(selectorLabel);
  panel.add(selector);
  panel.add(emailLabel);
  panel.add(emailField);
  panel.add(phoneLabel);
  panel.add(phoneField);
  panel.add(titleLabel);
  panel.add(titleField);
  panel.add(beginDateLabel);
  panel.add(beginDateField);
  panel.add(summaryLabel);
  panel.add(summaryField);
  panel.add(progressLabel);
  panel.add(progressField);
  panel.add(situationLabel);
  panel.add(situationField);
  panel.add(prioritiesLabel);
  panel.add(prioritiesField);
  panel.add(inputsLabel);
  panel.add(inputsField);
  panel.add(activitiesLabel);
  panel.add(activitiesField);
  panel.add(participationLabel);
  panel.add(participationField);
  panel.add(shortTermLabel);
  panel.add(shortTermField);
  panel.add(mediumTermLabel);
  panel.add(mediumTermField);
  panel.add(ultimateLabel);
  panel.add(ultimateField);
  panel.add(saveButton);
  panel.add(savedLabel);
  projectApp.add(panel);
  return projectApp;
}
  //need click handlers for the two buttons below, and their respective functions.
  //whenever i choose any option from the selector list, i get an error message which reads "unknown macro goFunky"
   function goFunky(e){
  var app = UiApp.getActiveApplication();
  var gmail = 'davidwilliamson82@gmail.com';
  var chosen = e.parameter.selectionBox;
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheet/ccc?key=0Ahi543aUoCw-dFN0SWRJWVV2alZsbUtGT2d6aUhpelE#gid=0")
  var palmifySheet = ss.getSheetByName('palmify');
  var stuff = palmifySheet.getDataRange().getValues();
  var panel = app.getElementById('face');
  var emailField = app.getElementById('emailArea');
  var phoneField = app.getElementById('phoneArea');
  var titleField = app.getElementById('titleArea');
  var beginDateField = app.getElementById('beginDateBox');
  var summaryField = app.getElementById('summaryArea');
  var progressField = app.getElementById('progressArea');
  var situationField = app.getElementById('situationArea');
  var prioritiesField = app.getElementById('prioritiesArea');
  var inputsField = app.getElementById('inputsArea');
  var activitiesField = app.getElementById('activitiesArea');
  var participationField = app.getElementById('participationArea');
  var shortTermField = app.getElementById('shortTermArea');
  var mediumTermField = app.getElementById('mediumTermArea');
  var ultimateField = app.getElementById('ultimateArea');
 //I'm not sure if asigning the panel an Id is useful or not.
 //I'm trying to figure out why the set text actions below this are unable to refer to the elements they are intended to refere
    if (chosen != 'New') {
     for (var i=0; i < stuff.length; i++){
       //add if, continue for gmail
       if (stuff [i][1] != gmail){
        continue;
        }
       if (stuff [i][5] != chosen){
        continue;
        }
        
        emailField.setText(stuff [i][2]);
        phoneField.setText(stuff [i][3]);
        titleField.setText(stuff [i][5]);
        beginDateField.setText(stuff [i][6]);
        summaryField.setText(stuff [i][7]);
        progressField.setText(stuff [i][8]);
        situationField.setText(stuff [i][9]);
        prioritiesField.setText(stuff [i][10]);
        inputsField.setText(stuff [i][11]);
        activitiesField.setText(stuff [i][12]);
        participationField.setText(stuff [i][13]);                    
        shortTermField.setText(stuff [i][14]);
        mediumTermField.setText(stuff [i][15]);
        ultimateField.setText(stuff [i][16]);
        return app;
     }
  }
        emailField.setText('');
        phoneField.setText('');
        titleField.setText('');
        beginDateField.setText('');
        summaryField.setText('');
        progressField.setText('');
        situationField.setText('');
        prioritiesField.setText('');
        inputsField.setText('');
        activitiesField.setText('');
        participationField.setText('');
        shortTermField.setText('');
        mediumTermField.setText('');
        ultimateField.setText('');
        return app;
  }

function saved(e){
  var app = UiApp.getActiveApplication();
  var chosen = e.parameter.selectionBox;
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheet/ccc?key=0Ahi543aUoCw-dFN0SWRJWVV2alZsbUtGT2d6aUhpelE#gid=0").getSheetByName('palmify');
  var stuff = sheet.getDataRange().getValues();
  var ownerName = 'David Williamson';
  var gmail = 'davidwilliamson82@gmail.com';
  var emailFieldValue = e.parameter.emailArea;
  var phoneFieldValue = e.parameter.phoneArea;
  var titleFieldValue = e.parameter.titleArea;
  var beginDateFieldValue = e.parameter.beginDateBox;
  var summaryFieldValue = e.parameter.summaryArea;
  var progressFieldValue = e.parameter.progressArea;
  var situationFieldValue = e.parameter.situationArea;
  var prioritiesFieldValue = e.parameter.prioritiesArea;
  var inputsFieldValue = e.parameter.inputsArea;
  var activitiesFieldValue = e.parameter.activitiesArea;
  var participationFieldValue = e.parameter.participationArea;
  var shortTermFieldValue = e.parameter.shortTermArea;
  var mediumTermFieldValue = e.parameter.mediumTermArea;
  var ultimateFieldValue = e.parameter.ultimateArea;
  var savedLabel = app.getElementById('sLabel');
  
  if (chosen != 'New'){
  
  for (var i=0; i < stuff.length; i++){
        if (stuff [i][1] != gmail){
        continue;
        }
        if (stuff [i][5] != chosen){
        continue;
        }
  var entry = i + 1;
  var nameCell = sheet.getRange("A"+entry);
  var gmailCell = sheet.getRange("B"+entry);
  var emailCell = sheet.getRange("C"+entry);
  var phoneCell = sheet.getRange("D"+entry);
  var titleCell = sheet.getRange("F"+entry);
  var beginDateCell = sheet.getRange("G"+entry);
  var summaryCell = sheet.getRange("H"+entry);
  var progressCell = sheet.getRange("I"+entry);
  var situationCell = sheet.getRange("J"+entry);
  var prioritiesCell = sheet.getRange("K"+entry);
  var inputsCell = sheet.getRange("L"+entry);
  var activitiesCell = sheet.getRange("M"+entry);
  var participationCell = sheet.getRange("N"+entry);
  var shortTermCell = sheet.getRange("O"+entry);
  var mediumTermCell = sheet.getRange("P"+entry);
  var ultimateCell = sheet.getRange("Q"+entry);
  nameCell.setValue(ownerName);
  gmailCell.setValue(gmail);
  emailCell.setValue(emailFieldValue);
  phoneCell.setValue(phoneFieldValue);
  titleCell.setValue(titleFieldValue);
  beginDateCell.setValue(beginDateFieldValue);
  summaryCell.setValue(summaryFieldValue);
  progressCell.setValue(progressFieldValue);
  situationCell.setValue(situationFieldValue);
  prioritiesCell.setValue(prioritiesFieldValue);
  inputsCell.setValue(inputsFieldValue);
  activitiesCell.setValue(activitiesFieldValue);  
  participationCell.setValue(participationFieldValue);
  shortTermCell.setValue(shortTermFieldValue);
  mediumTermCell.setValue(mediumTermFieldValue);
  ultimateCell.setValue(ultimateFieldValue);
  savedLabel.setVisible(true);
  return app;
  }    
}
  var entry = sheet.getLastRow()+1;
  var nameCell = sheet.getRange("A"+entry);
  var gmailCell = sheet.getRange("B"+entry);
  var emailCell = sheet.getRange("C"+entry);
  var phoneCell = sheet.getRange("D"+entry);
  var titleCell = sheet.getRange("F"+entry);
  var beginDateCell = sheet.getRange("G"+entry);
  var summaryCell = sheet.getRange("H"+entry);
  var progressCell = sheet.getRange("I"+entry);
  var situationCell = sheet.getRange("J"+entry);
  var prioritiesCell = sheet.getRange("K"+entry);
  var inputsCell = sheet.getRange("L"+entry);
  var activitiesCell = sheet.getRange("M"+entry);
  var participationCell = sheet.getRange("N"+entry);
  var shortTermCell = sheet.getRange("O"+entry);
  var mediumTermCell = sheet.getRange("P"+entry);
  var ultimateCell = sheet.getRange("Q"+entry);
  nameCell.setValue(ownerName);
  gmailCell.setValue(gmail);
  emailCell.setValue(emailFieldValue);
  phoneCell.setValue(phoneFieldValue);
  titleCell.setValue(titleFieldValue);
  beginDateCell.setValue(beginDateFieldValue);
  summaryCell.setValue(summaryFieldValue);
  progressCell.setValue(progressFieldValue);
  situationCell.setValue(situationFieldValue);
  prioritiesCell.setValue(prioritiesFieldValue);
  inputsCell.setValue(inputsFieldValue);
  activitiesCell.setValue(activitiesFieldValue);  
  participationCell.setValue(participationFieldValue);
  shortTermCell.setValue(shortTermFieldValue);
  mediumTermCell.setValue(mediumTermFieldValue);
  ultimateCell.setValue(ultimateFieldValue);
  savedLabel.setVisible(true);
  return app;
}
