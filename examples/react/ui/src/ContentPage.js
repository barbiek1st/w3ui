import React from 'react'
import { SimpleUploader } from '@w3ui/react-ui'
import { Uploader, UploaderProvider, useUploader } from '@w3ui/react-uploader'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { withIdentity } from './components/Authenticator'

function NoUIUploadComponent() {
  const [{ storedDAGShards }, uploader] = useUploader()

  return (
    <div>
      <input type="file" onChange={e => uploader.uploadFile(e.target.files[0])} />
      {storedDAGShards?.map(({ cid, size }) => (
        <p key={cid.toString()}>
          {cid.toString()} ({size} bytes)
        </p>
      ))}
    </div>
  )
}

function NoUIComponent() {
  return (
    <UploaderProvider>
      <NoUIUploadComponent />
    </UploaderProvider>
  )
}


function HeadlessUIComponent() {
  return (
    <Uploader>
      <Uploader.Form>
        <div>
          <label htmlFor='file'>File:</label>
          <Uploader.Input id="file" />
        </div>
        <button type='submit'>Upload</button>
      </Uploader.Form>
    </Uploader>
  )
}

function CustomizableUIComponent() {
  return (
    <UploaderProvider>
      <SimpleUploader />
    </UploaderProvider>
  )
}

function DropinUIComponent() {
  return (
    <div>TODO</div>
  )
}

export function ContentPage() {
  return (
    <>
      <h1 className="title">w3ui UI Components</h1>
      <p>
        w3ui provides React components at four different levels of
        abstraction, each of which builds upon the last. In order they are:
      </p>
      <h3>1. No UI</h3>
      <p>
        Maximum flexibility, React Contexts and hooks only:
      </p>
      <SyntaxHighlighter language="jsx" style={a11yDark}>
        {`
function NoUIUploadComponent() {
  const [{ storedDAGShards }, uploader] = useUploader()

  return (
    <div>
      <input type="file" onChange={e => uploader.uploadFile(e.target.files[0])} />
      {storedDAGShards?.map(({ cid, size }) => (
        <p key={cid.toString()}>
          {cid.toString()} ({size} bytes)
        </p>
      ))}
    </div>
  )
}

function NoUIComponent() {
  return (
    <UploaderProvider>
      <NoUIUploadComponent />
    </UploaderProvider>
  )
}
`}
      </SyntaxHighlighter>
      <NoUIComponent />

      <h3>2. Headless UI</h3>
      <p>
        A set of components designed to work together, modeled after HeadlessUI
        components like <a href="https://headlessui.com/react/combobox">Combobox</a>.
        These components don't make any markup or styling choices for you:
      </p>
      <SyntaxHighlighter language="jsx" style={a11yDark}>
        {`
function HeadlessUIComponent() {
  return (
    <Uploader>
      <Uploader.Form>
        <div>
          <label htmlFor='file'>File:</label>
          <Uploader.Input id="file" />
        </div>
        <button type='submit'>Upload</button>
      </Uploader.Form>
    </Uploader>
  )
}
`}
      </SyntaxHighlighter>
      <HeadlessUIComponent />

      <h3>3. Customizable UI</h3>
      <p>
        Components that work out of the box, and let you customize some aspects of
        markup and most of the styling:
      </p>
      <SyntaxHighlighter language="jsx" style={a11yDark}>
        {`
function CustomizableUIComponent() {
  return (
    <UploaderProvider>
      <SimpleUploader />
    </UploaderProvider>
  )
}
`}
      </SyntaxHighlighter>
      <CustomizableUIComponent />

      <h3>4. Drop-in UI</h3>
      <p>
        Components designed to be dropped into a page with very little customization.
        Limited styling customization may be supported:
      </p>
      <SyntaxHighlighter language="jsx" style={a11yDark}>
        {`
function DropinUIComponent() {
  return (
    <>
      <UploaderAndUploadList />
      <PlaylistUploaderAndPlayer />
    </>
  )
}
`}
      </SyntaxHighlighter>
      <DropinUIComponent />

    </>
  )
}

export default withIdentity(ContentPage)
