import { Autocomplete, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import usePrevious from "../../hooks/usePrevious"
import AlertForm from "./alertForm"
import SideBar from "./sidebar"

const Alert = () => {

  const [alert, setAlert] = useState({} as any)
  const [alerts, setAlerts] = useState([] as any)
  const [machine, setMachine] = useState({});

  const preAlert = usePrevious(alert)

  const selectAlert = (a: any) => {
    setAlert(a)
  }

  const fetchAlerts = async () => {
    // let { data, error }: any = await supabase
    // .from('Alerts')
    // .select('*')
    // .order('updated_at', { ascending: false })

    // setAlerts(data || [])
    // if(error) {
    //   console.log(error)
    // }
    setAlerts([
      {id: 1,},
      {id: 2,},
      {id: 3,},
      {id: 4,},
      {id: 5,},
      {id: 6,},
      {id: 7,},
      {id: 8,},
      {id: 9,},
      {id: 10,},
      {id: 11,},
    ])
  }

  // fetch Alerts
  useEffect(() => {
    (async () => await fetchAlerts())()
  }, [])

  const alertSubmit = () => {

  }
  return <>
  <div className="machine-selector">
    <Autocomplete
      disablePortal
      id="combo-box"
      options={[{
        label: 'CNC Machine',
        value: '1'
      }, {
        label: 'Milling Machine',
        value: '2'
      }]}
      value={{
        label: 'CNC Machine',
        value: '1'
      }}
      onChange={(event: any, newValue: any) => {
        setMachine(newValue);
      }}
      size="small"
      sx={{ width: 200, ml:1, mt: 'auto' }}
      renderInput={(params) => <TextField {...params} />}
    />
  </div>
  <div className="alert-container">
    <SideBar alerts={alerts} selectAlert={selectAlert} selectedAlertId={alert.id}></SideBar>
    <AlertForm alert={alert} alertSubmit={alertSubmit}></AlertForm>
  </div>
  </>
}

export default Alert
