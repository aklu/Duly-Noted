import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonActionSheet
} from "@ionic/react";
import { chevronBack, ellipsisHorizontal, trash, archive, close} from "ionicons/icons";
import styles from "./NoteEditPage.module.css";

 export default function NoteEditPage(props) {
    const { 
      onSave, 
      text, 
      onDelete,
      onArchive
    } = props;
    const { t } = useTranslation();
    const [value, setValue] = useState(text);
    const [showActions, setShowActions] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton color="secondary" onClick={() => onSave(value)}>
              <IonIcon slot="icon-only" icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("noteEditPageTitle")}</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="secondary" onClick={() => setShowActions(true)}>
              <IonIcon slot="icon-only" icon={ellipsisHorizontal}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <textarea className={styles.textArea} value={value} onChange={(event) => setValue(event.target.value)}/>
        <IonActionSheet 
          isOpen={showActions}
          onDidDismiss={() => setShowActions(false)}
          buttons={[
            {
              text: t("deleteText"),
              role: "destructive",
              icon: trash,
              handler: onDelete
            },
            {
              text: t("cancelText"),
              role: "cancel",
              icon: close,
              handler: () => setShowActions(false)
            },
            {
              text: t("archiveText"),
              icon: archive,
              handler: onArchive
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
  }

  NoteEditPage.propTypes = {
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };