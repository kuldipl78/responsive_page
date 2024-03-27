import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabButton = isActive ? 'active-tab-btn' : ''
  const activeId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabButton}`}
        onClick={activeId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
