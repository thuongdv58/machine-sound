import classNames from 'classnames'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button, IconButton } from '@mui/material'

const SideBar = ({ alerts, selectAlert, selectedAlertId }: any) => {
  const onSelect = (id: number) => {
    selectAlert(id)
  }

  return (
    <div className="sidebar">
      <div className="back">
        <Button size="small" startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
      <div className="alert-count">
        <span style={{ fontSize: 'small' }}>6 Alerts</span>
        <span style={{ fontSize: 'small' }} className="new-tag">
          2 New
        </span>
      </div>
      <div className="alert-list scrollbar">
        {alerts.map((alert: any) => (
          <div
            className={classNames(
              alert.id === selectedAlertId ? 'active' : '',
              'alert-item'
            )}
            onClick={() => onSelect(alert.id)}
            key={alert.id}
          >
            <div className="new-item"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>ID #000123151</div>
              <div className="alert-type moderate">moderate</div>
            </div>
            <h5 style={{ margin: '2px' }}>Suspected reason</h5>
            <div>
              Detected at{' '}
              {new Date().toLocaleString('en-US', {
                dateStyle: 'short'
              })}
            </div>
            <div style={{ color: '#3478FC' }}>Machine</div>
            {/* <div className="mx-5 pt-1 truncate">
            <span>
              {new Date(alert.updated_at).toLocaleString('en-US', {
                timeStyle: 'short',
                dateStyle: 'short'
              })}
            </span>
            &nbsp;&nbsp;
            <span>{alert.content}</span>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
