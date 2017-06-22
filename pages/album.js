import React from 'react'
import Link from 'next/link'
import PreLoginLayout from '../components/PreLoginLayout'

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <PreLoginLayout playlist={[]}>
          <div>Album</div>
          <ul>
            <li>
              <Link href='/?id=1&role=album' as='/album/1'>
                <a>Album</a>
              </Link>
            </li>
            <li>
              <Link href='/?id=2&role=artist' as='/artist/2'>
                <a>Artist</a>
              </Link>
            </li>
          </ul>
        </PreLoginLayout>
      </div>
    );
  }
}

export default Album
