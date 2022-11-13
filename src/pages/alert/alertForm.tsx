import {
  Autocomplete,
  Button,
  TextareaAutosize,
  TextField
} from '@mui/material'
import { useEffect, useMemo } from 'react'
import Spectrogram from 'spectrogram'
import WaveSurfer from 'wavesurfer.js';

const AlertForm = ({ alert, alertSubmit }: any) => {
  useEffect(() => {
    let spectro = Spectrogram(
      document.getElementById('normal-spectrum') as any,
      {
        audio: {
          enable: false
        }
      }
    )
    let audioContext = new AudioContext()
    let request = new XMLHttpRequest()
    request.open('GET', 'normal.wav', true)
    request.responseType = 'arraybuffer'

    request.onload = function () {
      audioContext.decodeAudioData(request.response, function (buffer) {
        spectro.connectSource(buffer, audioContext)
        spectro.start()
      })
    }
    request.send()
    return () => {
      spectro.stop()
      request.abort()
    }
  }, [])

  useEffect(() => {
    let spectro = Spectrogram(
      document.getElementById('abnormal-spectrum') as any,
      {
        audio: {
          enable: false
        }
      }
    )
    let audioContext = new AudioContext()
    let request = new XMLHttpRequest()
    request.open('GET', 'normal.wav', true)
    request.responseType = 'arraybuffer'

    request.onload = function () {
      audioContext.decodeAudioData(request.response, function (buffer) {
        spectro.connectSource(buffer, audioContext)
        spectro.start()
      })
    }
    request.send()
    return () => {
      spectro.stop()
      request.abort()
    }
  }, [])

  useEffect(() => {
    let wavesurfer = WaveSurfer.create({
      container: '#normal-wave',
      waveColor: 'violet',
      progressColor: 'purple'
    })
    wavesurfer.on('ready', function () {
      wavesurfer.play();
    })
    wavesurfer.load('normal.wav');

    return () => {
      wavesurfer.destroy()
    }
  }, [])

  useEffect(() => {
    let wavesurfer = WaveSurfer.create({
      container: '#abnormal-wave',
      waveColor: 'violet',
      progressColor: 'purple'
    })
    wavesurfer.on('ready', function () {
      wavesurfer.play();
    })
    wavesurfer.load('normal.wav');

    return () => {
      wavesurfer.destroy()
    }
  }, [])

  return (
    <div className="alert-form scrollbar">
      <div className="heading">
        <h2 style={{ color: '#5F6368' }}>Alert ID: #000123151</h2>
        <span style={{ color: '#5F6368' }}>
          Detected at:{' '}
          {new Date().toLocaleString('en-US', {
            timeStyle: 'short',
            dateStyle: 'short'
          })}
        </span>
      </div>
      <div className="audio-charts">
        <div className="abnormal">
          <div style={{ marginBottom: '20px' }}>Abnormal Machine Output</div>
          <audio id="abnormal-audio" src="normal.wav" controls></audio>
          <div id="abnormal-wave" style={{ maxWidth: '300px', height: '150px'}}></div>
          <canvas id="abnormal-spectrum"></canvas>
        </div>
        <div className="normal">
          <div style={{ marginBottom: '20px' }}>Normal Machine Output</div>
          <audio id="normal-audio" src="normal.wav" controls></audio>
          <div id="normal-wave" style={{ maxWidth: '300px', height: '150px'}}></div>
          <canvas id="normal-spectrum"></canvas>
        </div>
      </div>
      <div className="details">
        <h3>Equipment</h3>
        <p>Cnc machine</p>
        <h3>Suspected reason</h3>
        <Autocomplete
          disablePortal
          id="combo-box"
          options={[
            {
              label: 'Unknown Abnormally',
              value: '1'
            }
          ]}
          value={{
            label: 'Unknown Abnormally',
            value: '1'
          }}
          onChange={(event: any, newValue: any) => {}}
          size="small"
          sx={{ width: 300, ml: 1, mt: 'auto' }}
          renderInput={(params) => <TextField {...params} />}
        />
        <h3>Action Required</h3>
        <Autocomplete
          disablePortal
          id="combo-box"
          options={[
            {
              label: 'Fix',
              value: '1'
            },
            {
              label: 'Replace',
              value: '2'
            }
          ]}
          value={{
            label: 'Fix',
            value: '1'
          }}
          onChange={(event: any, newValue: any) => {
            // setMachine(newValue);
          }}
          size="small"
          sx={{ width: 300, ml: 1, mt: 'auto' }}
          renderInput={(params) => (
            <TextField {...params} label="Select Action" />
          )}
        />
        <h3>Comments</h3>
        <textarea
          rows={6}
          style={{ width: 600, borderRadius: '2px', resize: 'none' }}
        ></textarea>
        <div style={{ marginTop: '10px', marginBottom: '50px' }}>
          <Button variant="contained">Update</Button>
        </div>
      </div>
    </div>
  )
}

export default AlertForm
