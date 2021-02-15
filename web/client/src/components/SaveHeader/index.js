import React, {useRef, useEffect, useContext} from 'react'
import { Save16 } from '@carbon/icons-react'
import { keyboardOnlySubmit } from '../../utils'
import AppContext from "../../context/app";

const SaveHeader = ({ onSave, onCancel, title, canSave }) => {
  const focus = useRef()
  const { t } = useContext(AppContext)

  // focus on title when this component loads
  useEffect(() => {
    // disabled due to this being triggered by canSave props change
    // please uncomment if you fix this problem, cheers
    // focus.current.focus()
  })

  return (
    <div className="save-header">
      <span tabIndex={0} ref={focus} className="save-header_title">
        {title}
      </span>
      <span className="save-header_buttons">
        <span
          className="save-header_save-button"
          tabIndex={0}
          aria-disabled={!canSave}
          data-disabled={!canSave}
          aria-label={t("content.accountSettings.save")}
          role="button"
          onKeyDown={(event) => {
            if (onSave && canSave) keyboardOnlySubmit(event, onSave)
          }}
          onClick={() => {
            if (onSave && canSave) onSave()
          }}
        >
          {t("content.accountSettings.save")} <Save16 style={{ marginLeft: 5 }} />
        </span>
        <span
          onClick={() => {
            if (onCancel) onCancel()
          }}
          tabIndex={0}
          aria-label={t("content.accountSettings.cancel")}
          role="button"
          onKeyDown={(event) => {
            if (onSave) keyboardOnlySubmit(event, onSave)
          }}
        >
          {t("content.accountSettings.cancel")}
        </span>
      </span>
    </div>
  )
}

export default SaveHeader
