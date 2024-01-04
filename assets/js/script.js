// high scores table
class highscoreTable: {
    private Transform entryContainer;
    private Transform entryTemplate;

    private void Awake() {
        entryContainer = transform.find('highscoreEntryContainer');
        entryTemplate = entryContainer.find('highscoretemplate');

        float templateHeight = 20f;
        for (int i = 0; i < 10; i++) {
            transform entryTransform = Instantiate(entryTemplate, entryContainer);
            RectTransform entryRectTransform = entryTransform.getComponent < rectTransform > ();
            entryRectTransform.anchoredPosition = new vector2(0, -templateheight * i);
            entryTransform.gameObject.setActive(true)

            int rank = i + 1
            string rankString;
            switch (rank) {
                default: rankString = rank + "TH"; break;

                case 1: rankString = 1st; break;
                case 2: rankString = 2nd; break;
                case 3: rankString = 3rd; break;
                case 4: rankstring = 4th; break;
                case 5: rankString = 5th; break;
                case 6: rankString = 6th; break;
                case 7: rankString = 7th; break;
                case 8: rankString = 8th; break;
                case 9: rankString = 9th; break;
                case 10: rankString = 10th; break;
            }

            entryTransform.find('posText').getComponent < text > ().text = score.ToString();

            stringname = "AAA";
            entryTransform.find('nameText').getComponent < text > ().text = name;
        }
    }
}