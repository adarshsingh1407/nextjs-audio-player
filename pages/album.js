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
              <Link href='/album?id=1' as='/album'>
                <a>Album</a>
              </Link>
            </li>
            <li>
              <Link href='/artist?id=2' as='/album'>
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
